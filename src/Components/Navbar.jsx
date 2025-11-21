import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.webp";
const Navbar = () => {
  let a = 1;
  return (
    <div className="bg-white  border-b-2 border-gray-300">
      <div className="navbar max-w-[1460px] mx-auto px-4">
        <div className=" navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52  shadow font-semibold"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About US</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex gap-1">
            <Link className="/">
              <img className="w-6 h-6 sm:w-10 sm:h-10 " src={logo} alt="" />
            </Link>
            <Link
              to="/"
              className="flex items-center text-center text-[14px] sm:text-xl font-semibold ml-2 btn-ghost bg-linear-to-r from-[#0F766E] to-[#34D399]
 bg-clip-text text-transparent logo"
            >
              SkillSwap
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className=" menu-horizontal px-1 font-semibold gap-4">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {a ? (
            <>
              <img
                className="rounded-full w-12 h-12 bg-red-500"
                src=""
                alt=""
              />
              <Link className="btn bg-secondary text-white">Sign Out</Link>
            </>
          ) : (
            <div className="flex gap-2">
              <Link class="btn btn-secondary">LogIn</Link>
              <Link className="btn btn-accent text-white">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
