import React from "react";

const HomeAboutUs = () => {
  return (
    <div className="lg:h-[100vh] h-[200vh] p-4 bg-none">

      {/* About Us */}
      <div className="lg:flex justify-between gap-4 p-10 border-2 border-sky-700 rounded-3xl shadow-xl bg-black h-[100%]">

        <div className="lg:h-[100%] h-[50%] lg:w-[100%]  p-3 bg-sky-500 rounded-3xl border-2 border-white shadow-inner">
          About Us
        </div>

        <div className="lg:h-[100%] h-[50%] lg:w-[100%]  my-6 lg:my-0  p-3 bg-sky-500 rounded-3xl border-2 border-white shadow-inner">
          Contact Us
        </div>

      </div>
      
    </div>
  );
};

export default HomeAboutUs;
