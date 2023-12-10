import HeadingField from "../components/headingField";
import DataComponent from "../components/datacard";
import { Darker_Grotesque } from "next/font/google";
export default function Contact() {
  return (
    <div className="m-2 p-2 font-bold text-3xl text-[#F5F5F7]">
      <div>
        <HeadingField heading="Contact" />
      </div>
      <div>
        <br></br>
        <p>Feel free to say Hi !</p>
      </div>
      <div>
        <DataComponent dataName="Gmail" />
        <DataComponent dataName="LinkedIn" />
        <DataComponent dataName="Behance" />
      </div>
    </div>
  );
}
