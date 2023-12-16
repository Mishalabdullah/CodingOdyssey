import React from "react";

const DataComponent = ({
  dataName,
  dataLink,
  dataText = "",
  dateStart = "",
  dateEnd = "",
}) => {
  return (
    <div className="h-64 font-inter">
      <a href={dataLink}>
        <div className="bg-[#2525258C] md:text-3xl  md:hover:bg-[#8FDF92] text-xl text[#9C9C9C] bg-opacity-40 relative rounded-[52px] m-2 h-full md:w-11/12  p-10">
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

export default DataComponent;
