import SearchBox from "@/components/SearchBox";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WeatherWise</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary to-primary-foreground">
        <div className="max-w-md w-full px-4 md:px-0">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold text-primary-foreground">Weather Wise</h1>
            <p className="text-lg text-primary-foreground/80">Get accurate weather information for any location.</p>
            <div className="relative">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
