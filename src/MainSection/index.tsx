import React, { useState } from "react";
import HappyWoman from '../assets/juicy-girl-is-working-on-laptop-at-a-remote-job.gif'
import GoalSection from "../GoalSection";



const MainSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("morning");


  return (
    <main className="flex-grow p-4 overflow-y-auto mb-28">
      <div className="bg-white shadow-md rounded-lg p-6 mb-8 flex items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-black">
            Stay Productive
          </h2>
          <p className="text-gray-600 mb-4">
            Organize your daily activities to build better habits
          </p>
          <button
            className=" 
            px-6
            rounded-full
            py-4
            text-white
            text-sm bg-indigo-400"
          >
            Set Now
          </button>
        </div>
        <div>
          <img className=" ml-5 min-w-52" src={HappyWoman} />
        </div>
      </div>
      <div>
        <GoalSection/>
      </div>

    </main>
  );
};

export default MainSection;
