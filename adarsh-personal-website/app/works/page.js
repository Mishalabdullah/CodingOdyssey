import HeadingField from "../components/headingField";
import MobileNabar from "../components/mobileNavbar";
import WorkCard from "../components/workCard";
import DataComponent from "../components/datacard";
import Navbar from "../components/navbar";
export default function Works() {
  return (
    <div className="m-2 p-2 font-bold text-3xl text-[#F5F5F7]">
      <div className="font-bold text-[#F5F5F7]">
        <HeadingField heading="Selected Works" />
        <MobileNabar />
      </div>
      <div>
        <Navbar />
        <WorkCard
          imageURL={`${process.env.PUBLIC_URL}/hack.png`}
          heading="Scheduler Pro"
          subHeading="AI based scheduling app."
          description="Scheduler Pro Al scheduling app that allows users to create and manage schedules based on selected dates and times. The app should provide timely reminders through
notifications to ensure users never miss an event or task. This app was designed for a 24 hour design hackathon."
          linkText="View Behance"
        />
        <WorkCard
          imageURL={`${process.env.PUBLIC_URL}/hack.png`}
          heading="Reakt"
          subHeading="Realtime emergency mediator app."
          description="Reakt, the real-time emergency mediator app, revolutionizes the reporting process during dangerous situations. With a simple tap, citizens can automatically transmit live information to the nearest police station or officials, fostering seamless interaction and ensuring a swift emergency response. This app was designed for a 24 hour design hackathon."
          linkText="View Behance"
        />
        <WorkCard
          imageURL={`${process.env.PUBLIC_URL}/website.png`}
          heading="Indian Society for Technical Education"
          subHeading="Revamping the website of Indian Society for Technical Education"
          description="Indian Society for Technical Education, Government Engineering College Thrissur students chapter is actively involved in conducting technical events, talks, workshops, and competitions to promote innovation among young minds. The chapter has over 2000 students and 300+ faculty members."
          linkText="View Behance"
        />
        <WorkCard
          imageURL={`${process.env.PUBLIC_URL}/diverse.png`}
          heading="Miscellaneous projects"
          subHeading="A Collection of miscellaneous projects"
          description="These projects serve as my practice and experiments in user interface design and are presented without any specific categorization or order. Throughout these projects, I focused on designing components, login page flows, home pages, and various UI elements."
          linkText="View Behance"
        />
      </div>
      <div>
        <HeadingField heading="Ongoing Projects" />
        <div>
          <DataComponent
            dataName="MuLearn 3.0"
            dataText="New version website for GTech MuLearn"
          />
          <DataComponent
            dataName="Polytech"
            dataText="An app for students in Kerala to view and calculate their GPA"
          />
        </div>
      </div>
    </div>
  );
}
