import SearchBox from "@/components/SearchBox";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-neutral-300 to-stone-400 py-4">
      <Head>
        <title>WeatherWise</title>
      </Head>
      <main className="mt-5 mx-5">
        <h1 className="flex justify-center text-xl font-medium mb-4">
          Weatherwise
        </h1>
        <form>
          <h2 className="flex justify-center text-lg mb-4">
            Search for local weather
          </h2>
          <div className="flex justify-center mb-4">
            <SearchBox />
          </div>
        </form>
      </main>
    </div>
  );
}
