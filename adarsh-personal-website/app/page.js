import Image from "next/image";
import PageComponent from "./components/pagecard";
export default function Home() {
  return (
    <main>
      <div className="flex justify-center h-screen text-8xl">
        <div className="text-[#343437] self-center ">Adarsh</div>
      </div>
      <div>
        <PageComponent pageName="About Me" pageLink="/about-me" />
      </div>
    </main>
  );
}
