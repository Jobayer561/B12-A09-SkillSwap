import React from "react";

const MyContainer = ({ className, children }) => {
  return (
    <div>
      <div className={`${className} max-w-[1250px] mx-auto`}>{children}</div>
    </div>
  );
};

export default MyContainer;
