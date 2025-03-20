import React from "react";

const Marquee = () => {
  const messages = [
    "Skip the Wait, Book Your Doctor Online!",
    "Healthy Life Begins with Easy Appointments!",
    "PulseCure – Your Gateway to Trusted Healthcare.",
    "Your Health Journey Starts Here – Book Smarter with PulseCure!",
  ];

  // Function to duplicate content multiple times
  const duplicateContent = (array, copies) => {
    return Array(copies).fill(array).flat();
  };

  return (
    <div className="overflow-hidden whitespace-nowrap bg-blue-500 text-white py-1">
      <div className="flex animate-marquee gap-[1%]">
        {duplicateContent(messages,10).map((message, index) => (
          <span 
            key={index} 
            className="text-lg sm:text-xl md:text-base flex-shrink-0"
          >
            {message}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;