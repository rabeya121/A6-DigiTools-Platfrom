import React from "react";

const Stats = () => {
  return (
    <section className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center text-white">
        
       
        <div className="flex-1">
          <h2 className="text-4xl font-bold">50K+</h2>
          <p className="text-sm mt-2 opacity-80">Active Users</p>
        </div>

        <div className="hidden md:block h-12 w-px bg-white opacity-40"></div>

        <div className="flex-1 mt-6 md:mt-0">
          <h2 className="text-4xl font-bold">280+</h2>
          <p className="text-sm mt-2 opacity-80">Premium Tools</p>
        </div>

        <div className="hidden md:block h-12 w-px bg-white opacity-40"></div>

        <div className="flex-1 mt-6 md:mt-0">
          <h2 className="text-4xl font-bold">4.9</h2>
          <p className="text-sm mt-2 opacity-80">Rating</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;