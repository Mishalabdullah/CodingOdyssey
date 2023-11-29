import Image from "next/image";
import PageComponent from "./components/pagecard";
export default function Home() {
  return (
    <main>
      <div className="flex justify-center h-screen relative">
        <div className="z-10 text-8xl text-[#343437] self-center relative">
          Adarsh
        </div>
      </div>
      <div className="z-20 relative">
        <PageComponent pageName="About Me" pageLink="/about-me" />
      </div>
    </main>
  );
}
