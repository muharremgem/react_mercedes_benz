import React from "react";
import merco from "../assets/login.jpg";

const Login = () => {
  return (
    <div>
      <div className="bg-black p-14 text-white text-xl"> Mercedes-Benz</div>
      <div>
        <img className="w-full" src={merco} alt="" />
      </div>
      <div className="bg-black"></div>
    </div>
  );
};

export default Login;
