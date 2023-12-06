import React from "react";

const PageComponent = ({ pageName, pageLink }) => {
  return (
    <div className="md:h-full font-inter">
      <a href={pageLink}>
        <div className="bg-[#2525258C] text[#9C9C9C] bg-opacity-40 relative rounded-[52px] m-2 h-48 md:h-full md:w-11/12  p-10">
          {pageName}
        </div>
      </a>
    </div>
  );
};

export default PageComponent;
