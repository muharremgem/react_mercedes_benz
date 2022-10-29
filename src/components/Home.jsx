import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-3  justify-center">
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
      </div>
    </>
  );
};

export default Home;
