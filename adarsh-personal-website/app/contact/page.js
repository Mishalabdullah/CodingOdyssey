import HeadingField from "../components/headingField";
import ContactComponent from "../components/contactcard";
import Navbar from "../components/navbar";
import MobileNabar from "../components/mobileNavbar";
export default function Contact() {
  return (
    <div className="m-2 p-2 font-bold text-xl text-[#F5F5F7]">
      <div>
        <HeadingField heading="Contact" />
        <MobileNabar />
        <Navbar />
      </div>
      <div>
        <br></br>
        <p className="text-base">Feel free to say Hi !</p>
      </div>
      <div className="text-base">
        <ContactComponent
          dataImage={`${process.env.PUBLIC_URL}/arrow.png`}
          dataName="Gmail"
        />
        <ContactComponent
          dataImage={`${process.env.PUBLIC_URL}/arrow.png`}
          dataName="LinkedIn"
        />
        <ContactComponent
          dataImage={`${process.env.PUBLIC_URL}/arrow.png`}
          dataName="Behance"
        />
        <ContactComponent
          dataImage={`${process.env.PUBLIC_URL}/arrow.png`}
          dataName="Dribble"
        />
      </div>
    </div>
  );
}
