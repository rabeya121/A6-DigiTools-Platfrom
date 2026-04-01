import React from "react";
import bannerImage from "../../assets/banner.png";

import playIcon from "../../assets/play.png";

const Banner = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-10 py-24 flex flex-col lg:flex-row items-center gap-12">
        
        <div className="flex-1">
          <span className="badge badge-secondary mb-4 rounded-full bg-[#E1E7FF] text-purple-600 font-medium border-none py-2">

            <span className="relative flex items-center justify-center w-5 h-5">
              <span className="absolute w-5 h-5 bg-purple-400/20 rounded-full"></span>
              <span className="absolute w-3.5 h-3.5 bg-purple-500/40 rounded-full"></span>
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            </span>

            New: AI-Powered Tools Available
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span>Supercharge Your</span>
            <br />
            <span className="inline-block text-purple-600 mt-2">Digital Workflow</span>
          </h1>
          <p className="text-gray-600 mb-8 max-w-xl">
            Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster <br /> Explore Products.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary rounded-full px-6  bg-purple-600 border-none hover:bg-purple-700 text-white">
              Explore Products
            </button>
            <button className="btn btn-outline border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full px-6 flex items-center gap-2">
              <img src={playIcon} alt="play"
                className="w-4 h-4" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex-1">
          <img
            src={bannerImage}
            alt="Banner Illustration"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>


    </section>

  );
};

export default Banner;