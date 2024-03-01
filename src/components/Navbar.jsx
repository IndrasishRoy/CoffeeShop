import React, { useState } from "react";
import { SiCoffeescript } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-scroll";
import { Button } from "../layouts/Button";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full z-10">
      <div>
        <div className="flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-[#e9d98a] to-[#aa6504]">
          <div className="flex flex-row items-center cursor-pointer gap-2">
            <span>
              <SiCoffeescript size={25} />
            </span>
            <h1 className="text-xl font-semibold">CafeSeeker</h1>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg gap-8 font-medium">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={450}
              className="group relative inline-block hover:text-[#ecdb83] cursor-pointer"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={450}
              className="group relative inline-block hover:text-[#ecdb83] cursor-pointer"
            >
              Menu
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={450}
              className="group relative inline-block hover:text-[#ecdb83] cursor-pointer"
            >
              Products
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={450}
              className="group relative inline-block hover:text-[#ecdb83] cursor-pointer"
            >
              About Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={450}
              className="group relative inline-block hover:text-[#ecdb83] cursor-pointer"
            >
              Review
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
          </nav>
          <div className="hidden lg:flex">
            <Button title="Login" />
          </div>
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white top-16 bottom-0 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={450}
            className="group relative inline-block hover:text-[#ecdb83] cursor-pointer"
            onClick={closeMenu}
          >
            Home
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={450}
            className="group relative inline-block hover:text-[#ecdb83] cursor-pointer"
            onClick={closeMenu}
          >
            Menu
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            to="products"
            spy={true}
            smooth={true}
            duration={450}
            className="group relative inline-block hover:text-[#ecdb83] cursor-pointer"
            onClick={closeMenu}
          >
            Products
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={450}
            className="group relative inline-block hover:text-[#ecdb83] cursor-pointer"
            onClick={closeMenu}
          >
            About Us
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={450}
            className="group relative inline-block hover:text-[#ecdb83] cursor-pointer"
            onClick={closeMenu}
          >
            Review
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>

          <Button title="Login" />
        </div>
      </div>
    </div>
  );
};
