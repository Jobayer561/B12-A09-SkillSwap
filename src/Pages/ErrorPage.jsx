import React from "react";
import error from "../assets/error-404.png";

import { Link } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center text-center py-12 px-4">
        <img className="h-[300px]" src={error} alt="" />
        <h1 className="text-3xl md:text-5xl font-semibold mb-3 mt-8">
          Oops, page not found!
        </h1>
        <p className="text-gray-500 mb-3">
          The page you are looking for is not available.
        </p>
        <Link to="/" className="btn bg-green-500 text-white">
          Go Back
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
