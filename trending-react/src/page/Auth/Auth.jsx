import React from "react";
import "./Auth.css";

const Auth = () => {
  return (
    <div className="h-screen relative authContainer text-white">
      <div className="absolute  top-0 right-0 left-0 bottom-0 bg-[#030712] bg-opacity-50">
        <div className="bgBluer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-[35rem] w-[30rem] rounded-md z-50 bg-black bg-opacity-50 shadow-2xl shadow-white">
          <h1 className="text-6xl font-bold pb-9">Won Trading</h1>
          <section></section>
        </div>
      </div>
    </div>
  );
};

export default Auth;
