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
            <div className="md:w-6/12 md:grow md:h-28rem">
              <PageComponent
                pageName="Works"
                pageLink="/works"
                onHoverText="Tap to see my selected works!"
              />
            </div>
            <div className="md:w-6/12 md:grow md:h-28rem">
              <PageComponent
                pageName="About Me"
                pageLink="/about-me"
                onHoverText="Curious about my design journey?"
              />
            </div>
          </div>
          <div className="flex md:grow md:flex-col md:h-28rem justify-evenly md:w-4/12">
            <PageComponent
              pageName="Contact"
              pageLink="/contact"
              onHoverText="let's collaborate!"
            />
            <div className="md:m-2 "></div>
            <PageComponent
              pageName="Resume"
              pageLink="/resume"
              onHoverText="Go to read.cv"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
