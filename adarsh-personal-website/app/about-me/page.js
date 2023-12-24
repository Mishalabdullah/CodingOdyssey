import HeadingField from "../components/headingField";
import Navbar from "../components/navbar";
import DataComponent from "../components/datacard";
import ContactComponent from "../components/contactcard";
import MobileNabar from "../components/mobileNavbar";
// import PageComponent from "../components/pagecard";
// import Link from "next/link";
export default function About() {
  return (
    <div className="p-2 m-2 font-bold text-xl text-[#F5F5F7]">
      <MobileNabar />
      <Navbar />
      <p>About me</p>
      <br />
      <br />
      <div>
        <p className="text-2xl">
          I'm a UX designer based in Kerala, India, pursuing a degree in
          Computer Science and Engineering at Government Engineering College
          Thrissur, graduating in 2025. Although my journey began in frontend
          web development, I soon uncovered a profound passion for shaping
          user-centric interfaces, prompting my shift into UX design. My
          fulfillment comes from crafting intuitive and captivating user
          experiences.
        </p>
      </div>
      <div>
        <div className="mt-10 text-base">
          <p className="text-[#86868B]">Find More On</p>
          <p>LinkedIn</p>
        </div>
        <div>
          <HeadingField heading="Experience" />
          <div>
            <ContactComponent
              dataName="UX Designer"
              dataLink="#"
              dataText="Indian Society for Technical Education
              Government Engineering College Thrissur"
              dateStart="Aug 2023 "
              dateEnd="- Present"
            />
            <ContactComponent
              dataName=" UI Designer Intern"
              dataLink="#"
              dataText="GTech MuLearn"
              dateStart="Jun 2023 "
              dateEnd="- Present"
            />
            <ContactComponent
              dataName="Co Founder, UX Designer"
              dataLink="#"
              dataText="Schematic Bytes"
              dateStart="Feb 2021 "
              dateEnd="- Present"
            />
          </div>
          <div>
            <HeadingField heading="Achievements" />
            <div>
              <DataComponent
                dataName="Sandshores Hackathon "
                dataLink="#"
                dataText="State level 1st in App development"
                dateStart="Nov 2023"
              />
              <DataComponent
                dataName="CodeStorm Hackathon "
                dataLink="#"
                dataText="State level 2nd in UX Design"
                dateStart="Aug 2023"
              />
              <DataComponent
                dataName="Beyond Us Hackathon "
                dataLink="#"
                dataText="State level 1st in UX Design"
                dateStart="Jul 2023"
              />
              <DataComponent
                dataName="Google’s Professional UX Design Certificate"
                dataLink="#"
                dateStart="Issued Sep 2023 "
              />
              <DataComponent
                dataName="freeCodeCamp Responsive Web Design Certificate"
                dataLink="#"
                dateStart="Issued Sep 2022 "
              />
            </div>
          </div>
          <div>
            <HeadingField heading="Speaker" />
            <div>
              <DataComponent
                dataName="Took a session in Bazinga 3.0 
                UX workshop."
                dataLink="#"
                dataText="Took a session in Bazinga 3.0 
                UX workshop. 
                Conducted in collaboration with IEEE GECT and IEEE RSET
                Nov 2023"
                dateStart="Nov 2023"
              />
              <DataComponent
                dataName="Took a session at Exclusive weekly twitch on UX design."
                dataLink="#"
                dataText="Conducted by GTech MuLearn"
                dateStart="Aug 2023"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
