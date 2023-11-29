import React from "react";

const PageComponent = ({ pageName, pageLink }) => {
  return (
    <div>
      <a href={pageLink}>
        <div className="bg-gray-300 bg-opacity-40 rounded-lg m-4 h-48 p-4">
          {pageName}
        </div>
      </a>
    </div>
  );
};

export default PageComponent;
