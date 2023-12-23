import React from "react";

const ContactComponent = ({
  dataName,
  dataLink,
  dataText = "",
  dateStart = "",
  dateEnd = "",
  dataImage = "",
}) => {
  return (
    <div className="h-[160px] md:h-64 font-inter">
      <a href={dataLink}>
        <div
          className="bg-[#2525258C] md:text-3xl  md:hover:bg-[#8FDF92] text-base text[#9C9C9C] bg-opacity-40 relative rounded-[52px] m-2 h-full md:w-11/12  p-10"
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <img className="w-4 " src={dataImage}></img>
          {dataName}
          <div className="text-[#86868B]">
            {dataText}
            <br />
            {dateStart + dateEnd}
          </div>
        </div>
      </a>
    </div>
  );
};

export default ContactComponent;
