import React from "react";
import merco from "../assets/login.jpg";
import { SiMercedes } from "react-icons/si";

const Login = () => {
  return (
    <div>
      <div className="flex flex-col bg-black p-8 text-white text-xl">
        <SiMercedes className="flex text-[4rem] " />
        <p className="flex ml-[6rem] font-thin">Mercedes-Benz</p>
      </div>
      <div>
        <img className="w-full" src={merco} alt="merco" />
      </div>
      <div className="bg-black"></div>
      <p>muharrrem</p>
    </div>
  );
};

export default Login;
