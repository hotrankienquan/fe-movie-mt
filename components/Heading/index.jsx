import React from "react";

const Heading = ({ content }) => {
  return (
    <div className="mb-4">
      <h3 className="text-[#da966e] text-2xl font-normal border-l-4 pl-2.5">
        {content || "ten o day"}
      </h3>
    </div>
  );
};

export default Heading;
