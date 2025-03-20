import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";


import {
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPlus,
} from "react-icons/fa";

const Footer = () => {

  const navigate = useNavigate();

  const socialLinks = [
    { href: "https://twitter.com", icon: <FaTwitter /> },
    { href: "https://www.youtube.com", icon: <FaYoutube /> },
    { href: "https://www.facebook.com", icon: <FaFacebookF /> },
    { href: "https://www.instagram.com", icon: <FaInstagram /> },
  ];

  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>

        {/* Footer Logo */}
          <div className="">
            <h1
              onClick={() => navigate("/")}
              className="text-black text-4xl font-semibold cursor-pointer flex items-start gap-0.5 border-b-2 w-44 border-black "
            >
              PulseCure{" "}
              <span className="text-sm mt-1">
                <FaPlus />
              </span>
            </h1>
          </div>
          <p className="w-full md:w-2/3 text-gray-600 leading-6 mt-1">
          PulseCure provides exceptional medical services, connecting you with experienced and trusted doctors. Our platform ensures easy appointment booking, offering reliable healthcare solutions tailored to your needs. Prioritize your health with PulseCure — where expert care meets convenience.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">SERVICES</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Health Checkups</li>
            <li>Vaccination Booking</li>
            <li>24/7 Emergency Assistance</li>
            <li>Nutrition and Diet Consultation</li>
          </ul>
        </div>

        <div className=" items-baseline">
          <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>+91-8892112828</li>
              <li>pulsecure@gmail.com</li>
            </ul>
          </div>

        {/* Footer social links */}
          <div className="flex mt-10 gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl transition-colors duration-300 ${link.color}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="">
        <hr className="border border-black" />
        <p className="py-5 text-sm text-center">
          Copyright 2025 @ PulseCure.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
