import React from "react";
import merco from "../assets/login.jpg";
import icon from "../assets/icon.jpeg";

const Login = () => {
  return (
    <div>
      <form className="flex flex-col ">
        <div className="flex items-center bg-black p-8 text-white text-xl">
          <img className="w-[5rem] " src={icon} alt="icon" />
          <p className="flex mt-12 ml-[1rem] font-thin">Mercedes-Benz</p>
        </div>
        <div className="foto ">
          <div className="flex  flex-col justify-center items-center rounded-full">
            <input
              className="bg-orange-500 m-5"
              type="text"
              placeholder="Name"
            />
            <input
              className="bg-green-500"
              type="password"
              placeholder="password"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
