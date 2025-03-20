import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-[#707070]">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full rounded-lg md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6 bg-[#D0BFFF] px-10 rounded-lg">

          <p className=" font-semibold text-lg text-gray-600">Our Office</p>
          <p className=" text-gray-500">
            9th Street, Besides Bokaro Mall <br /> A Block, Bokaro, India
          </p>
          <p className=" text-gray-500">
            Phone: +91-8709887878  <br /> Email: pulsecure@gmail.com
          </p>
          <p className=" font-semibold text-lg text-gray-600">
            Careers at PulseCure
          </p>
          <p className=" text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 rounded-lg py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
