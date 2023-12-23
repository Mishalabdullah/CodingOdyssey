import React from "react";

const PageComponent = ({ pageName, pageLink }) => {
  return (
    <div className="md:h-full text-2xl font-inter">
      <a href={pageLink}>
        <div
          className="bg-[#2525258C] md:hover:bg-[#8FDF92]  inline-block align-bottom  text[#9C9C9C] bg-opacity-40 relative rounded-[52px] m-2 h-48 md:h-full md:w-11/12  md:p-10 p-12"
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <p className="text-white">{pageName}</p>
        </div>
      </a>
    </div>
  );
};

export default PageComponent;
