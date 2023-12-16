// import Image from "next/image";
import PageComponent from "./components/pagecard";
export default function Home() {
  return (
    <main>
      <div className="text-[#F5F5F7] overflow-hidden text-2xl md:text-5xl font-bold  h-screen relative">
        <div className="m-2  p-2">
          Hi,<br></br>
          I'm Adarsh, a UX designer based in India. I solve real-world problems
          with empathetic design. I'm seeking fresh design opportunities and
          open to both internships and freelance projects.
        </div>
        <div className="md:flex md:h-96  md:mt-16 md:m-2 md:p-2">
          <div className="inline md:flex justify-stretch md:w-6/12">
            <div className="md:w-6/12 ">
              <PageComponent pageName="Works" pageLink="/works" />
            </div>
            <div className="md:w-6/12">
              <PageComponent pageName="About Me" pageLink="/about-me" />
            </div>
          </div>
          <div className="flex md:flex-col justify-around  md:w-6/12">
            <PageComponent pageName="Contact" pageLink="/contact" />
            <div className="md:m-2"></div>
            <PageComponent pageName="Resume" pageLink="/resume" />
          </div>
        </div>
      </div>
    </main>
  );
}
