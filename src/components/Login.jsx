import React from "react";
import merco from "../assets/login.jpg";
import icon from "../assets/icon.jpeg";
import { SiMercedes } from "react-icons/si";

const Login = () => {
  return (
    <div>
      <form className="flex flex-col ">
        <div className="flex items-center bg-black p-8 text-white text-xl">
          <img className="w-[5rem] " src={icon} alt="icon" />
          <p className="flex mt-12 ml-[1rem] font-thin">Mercedes-Benz</p>
        </div>
        <div className="foto  flex ">
          <div className="flex  flex-col ml-[10rem] mt-5  gap-5  justify-center items-center rounded-full">
            <SiMercedes className="text-5xl" />
            <input className="bg-black p-4 " type="text" placeholder="Name" />
            <input
              className="bg-black p-4 "
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
