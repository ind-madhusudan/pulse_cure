import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="m-8">
      <div className="text-center text-2xl pt-10 text-[#707070]">
        <p>
          ABOUT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full rounded-lg md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-full text-base  text-gray-600 bg-[#D0BFFF] rounded-xl">
          <p className="mx-4">
            Welcome to PulseCure, your reliable healthcare companion dedicated
            to simplifying the process of booking doctor appointments and
            managing your medical needs. At PulseCure, we believe that accessing
            quality healthcare should be effortless, convenient, and accessible
            to everyone.
          </p>
          <p className="mx-4">
            Our platform is designed to bridge the gap between patients and
            healthcare providers, offering a seamless experience for scheduling
            appointments, accessing medical records, and receiving timely care.
            With PulseCure, your health is in safe hands.
          </p>
          <b className="text-gray-800 mx-4">Our Vision</b>
          <p className="mx-4">
            At PulseCure, we are committed to revolutionizing healthcare
            accessibility. Our vision is to empower individuals with
            technology-driven solutions that ensure efficient and stress-free
            medical experiences. From finding the right doctor to managing
            follow-ups, PulseCure is here to guide you every step of the way.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20 gap-4">
        <div className="border border-[#D0BFFF] px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#D0BFFF] hover:text-black transition-all duration-300 text-gray-600 cursor-pointer rounded-lg">
          <b>EFFICIENCY:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#D0BFFF] hover:text-black transition-all duration-300 text-gray-600 cursor-pointer rounded-lg border-[#D0BFFF]">
          <b>CONVENIENCE: </b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#D0BFFF] hover:text-black transition-all duration-300 text-gray-600 cursor-pointer rounded-lg border-[#D0BFFF]">
          <b>PERSONALIZATION:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
