import CityData from "@/interfaces/city";
import Link from "next/link";
import { useEffect, useState } from "react";

const MIN_CITY_CHARS = 3;

let timeoutId: ReturnType<typeof setTimeout>;

const debounce = (fn: Function, ms = 300) => {
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export default function SearchBox() {
  const [inputValue, setInputValue] = useState("");
  const [cities, setCities] = useState<CityData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/city/${inputValue}`);
        const data = await response.json();
        setCities(data.cities);
      } catch (error) {
        console.error(error);
      }
    };

    if (inputValue.length >= MIN_CITY_CHARS) {
      debounce(fetchData)();
    }
  }, [inputValue]);

  return (
    <div>
      <input
        className="p-2 rounded-lg w-64"
        type="text"
        placeholder="City name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {inputValue.length >= MIN_CITY_CHARS && (
        <ul className="py-1">
          {cities.map((city) => (
            <li key={city.id} className="block w-full rounded-md px-4 py-2 text-left text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus-visible:bg-primary focus-visible:text-primary-foreground">
              <Link href={`/detail/${city.id}`}>
                {city.name}
                {city.state ? `, ${city.state}` : ""} ({city.country})
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
