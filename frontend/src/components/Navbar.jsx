import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { FaPlus } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
    navigate("/login");
  };

  return (
    <div className=" bg-[#180894]">
      <div className="flex items-center justify-between text-sm py-4 mb-0.5 mx-4">
        <div className="">
          <h1
            onClick={() => navigate("/")}
            className="text-white text-2xl font-semibold cursor-pointer flex items-start justify-center gap-0.5"
          >
            PulseCure{" "}
            <span className="text-sm mt-1">
              <FaPlus />
            </span>
          </h1>
        </div>
        <ul className="md:flex items-start gap-5 font-medium hidden text-white">
          <NavLink to="/">
            <li className="py-1">Home</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/doctors">
            <li className="py-1">All Doctors</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/about">
            <li className="py-1">About</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/contact">
            <li className="py-1">Contact</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-4 ">
          {token && userData ? (
            <div className="flex items-center gap-2 cursor-pointer group relative">
              <img className="w-8 rounded-full" src={userData.image} alt="" />
              <img className="w-2.5" src={assets.dropdown_icon} alt="" />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4">
                  <p
                    onClick={() => navigate("/my-profile")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/my-appointments")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={logout}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-[#4128c2] text-white px-8 py-3 rounded-full font-light hidden md:block text-sm"
            >
              Create account
            </button>
          )}
      
          <CiMenuFries
            onClick={() => setShowMenu(true)}
            className="text-2xl text-white md:hidden"
          />

          {/* ---- Mobile Menu ---- */}
          <div
            className={`md:hidden ${
              showMenu ? "fixed w-full" : "h-0 w-0"
            } right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
          >
            <div className="flex items-center justify-between px-5 py-6 ">
              <img src={assets.log} className="w-36" alt="" />
              <img
                onClick={() => setShowMenu(false)}
                src={assets.cross_icon}
                className="w-7"
                alt=""
              />
            </div>
            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
              <NavLink onClick={() => setShowMenu(false)} to="/">
                <p className="px-4 py-2 rounded full inline-block">HOME</p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/doctors">
                <p className="px-4 py-2 rounded full inline-block">
                  ALL DOCTORS
                </p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/about">
                <p className="px-4 py-2 rounded full inline-block">ABOUT</p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/contact">
                <p className="px-4 py-2 rounded full inline-block">CONTACT</p>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
