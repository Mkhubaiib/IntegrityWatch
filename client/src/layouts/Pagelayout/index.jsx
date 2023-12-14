import React from "react";

const index = ({ pagename, children }) => {
  return (
    <div className="min-h-[100vh]">
      <p className=" px-16 text-3xl font-bold py-8">{pagename}</p>
      <hr />
      <div className="flex justify-center items-center w-full py-16 relative">
        {children}
      </div>
    </div>
  );
};

export default index;
