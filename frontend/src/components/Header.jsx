import React from "react";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";

const Header = () => {
  const tags = [
    "Book Your Appointment",
    "Consult Online",
    "Get Expert Advice",
    "Schedule a Check-Up",
  ];
  const [currentText, setCurrentText] = useState("");
  const [tagIndex, setTagIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150;

    const timer = setTimeout(() => {
      const currentTag = tags[tagIndex];
      if (!isDeleting) {
        setCurrentText(currentTag.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else {
        setCurrentText(currentTag.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }

      if (!isDeleting && charIndex === currentTag.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTagIndex((prev) => (prev + 1) % tags.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, tagIndex, tags]);

  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-[#500073] to-[#2A004E] px-6 md:px-10 lg:px-20">
      {/* --------- Header Left --------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        {/* custom code */}
        <div className="text-center text-white">
          <h1 className="text-4xl w-full md:text-4xl font-bold">
            {currentText}
            <span className="animate-blink ">|</span>
          </h1>
        </div>

        <span className=" text-4xl md:text-4xl font-bold text-white">
          With Trusted Doctors
        </span>
        {/* custom code */}
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" /> schedule your appointment
            hassle-free.
          </p>
        </div>

        {/* Changing */}
        <a
          href="#speciality"
          className="relative overflow-hidden group  flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Book appointment{" "}
          <img className="w-3" src={assets.arrow_icon} alt="" />
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#4c06e4] to-transparent transform scale-x-150 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></span>
        </a>
      </div>

      {/* --------- Header Right --------- */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
