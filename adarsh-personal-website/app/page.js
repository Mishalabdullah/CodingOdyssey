import Image from "next/image";
import PageComponent from "./components/pagecard";
export default function Home() {
  return (
    <main>
      <div className="text-[#F5F5F7] text-2xl  h-screen relative">
        <div className="m-2 p-2">
          Hi,<br></br>
          I'm Adarsh, a UX designer based in India. I solve real-world problems
          with empathetic design. I'm seeking fresh design opportunities and
          open to both internships and freelance projects.
        </div>
        <PageComponent pageName="Works" pageLink="/about-me" />
        <PageComponent pageName="About Me" pageLink="/about-me" />
        <div className="flex ">
          <PageComponent pageName="Contact" pageLink="/about-me" />
          <PageComponent pageName="Resume" pageLink="/about-me" />
        </div>
      </div>
    </main>
  );
}
