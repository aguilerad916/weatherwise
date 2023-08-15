import CityData from "@/interfaces/city";
import { NextApiRequest, NextApiResponse } from "next";
import cities from "@/lib/city.list.json";

const Cities = cities as CityData[];
const NUM_SUGGETIONS = 5;
function searchCities(name: string):CityData[] {
    const matchingCities = Cities.filter(city => city.name.toLowerCase().startsWith(name.toLowerCase())).slice(0, NUM_SUGGETIONS);
    return matchingCities;
}

export default function handler({query: {name}}: NextApiRequest, res: NextApiResponse) {
    const cityName = Array.isArray(name) ? name.join('') : name;
    const filteredCities = cityName ? searchCities(cityName) : [];
    return res.status(200).json({ cities: filteredCities  })
}