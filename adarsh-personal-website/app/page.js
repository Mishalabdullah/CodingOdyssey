// import Image from "next/image";
import PageComponent from "./components/pagecard";
export default function Home() {
  return (
    <main>
      <div className="text-[#F5F5F7]  text-2xl md:text-5xl h-screen relative">
        <div className="m-4  p-2">
          Hi,<br></br>
          I'm Adarsh, a UX designer based in India. I solve real-world problems
          with empathetic design. I'm seeking fresh design opportunities and
          open to both internships and freelance projects.
        </div>
        <div className="md:flex md:h-96  md:mt-16 md:m-2 md:p-2">
          <div className="inline md:flex md:w-8/12">
            <div className="md:w-6/12 ">
              <PageComponent pageName="Works" pageLink="/works" />
            </div>
            <div className="md:w-6/12">
              <PageComponent pageName="About Me" pageLink="/about-me" />
            </div>
          </div>
          <div className="flex md:flex-col justify-evenly md:w-4/12">
            <PageComponent pageName="Contact" pageLink="/contact" />
            <PageComponent pageName="Resume" pageLink="/resume" />
          </div>
        </div>
        {/* <div className="grid gap-2 grid-cols-1 md:grid-cols-3">
          <div className="">
            <PageComponent pageName="Works" pageLink="/works" />
          </div>
          <div>
            <PageComponent pageName="Works" pageLink="/works" />
          </div>
          <div className="">
            <PageComponent pageName="Works" pageLink="/works" />
            <PageComponent pageName="Works" pageLink="/works" />
          </div>
        </div> */}
      </div>
    </main>
  );
}
