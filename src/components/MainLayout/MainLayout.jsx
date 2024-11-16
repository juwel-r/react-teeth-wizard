import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../../Footer";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <section className="my-6 w-11/12 mx-auto">
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
