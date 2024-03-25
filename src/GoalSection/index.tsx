import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Goal {
  id: number;
  title: string;
  deadline: string;
  completed: boolean;
  progress: string;
}

interface GoalItems {
  [key: string]: Goal;
}

const GoalSection: React.FC = () => {
  const goalItems: GoalItems = {
    goalone: {
      id: 1,
      title: "Finish Project",
      deadline: "02/04/2024",
      completed: false,
      progress: "20%",
    },
    goaltwo: {
      id: 2,
      title: "Complete Assignment",
      deadline: "05/05/2024",
      completed: false,
      progress: "45%",
    },
    goalthree: {
      id: 3,
      title: "Submit Report",
      deadline: "07/06/2024",
      completed: false,
      progress: "70%",
    },
  };
  // Fetch goals from an API or local storage

  return (
    <div className=" text-center mt-12">
      <h1 className=" text-2xl font-bold"> Your Goals</h1>
      <ul>
        {Object.values(goalItems).map((goal, index) => (
          <li
            key={index}
            className="border border-gray-200 p-4 rounded-lg shadow-md m-5"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{goal.title}</h3>
              <div className="flex flex-col items-center">
                <span className="text-gray-600">{goal.deadline}</span>
                <p className="text-sm text-gray-400">End Date</p>
              </div>
            </div>

            <div className="">
              <div className="flex justify-between">
                <span className="text-base font-medium text-indigo-400 dark:text-white">
                  In Progress
                </span>
                <span className="text-sm font-medium text-indigo-400 dark:text-white">
                  {goal.progress}
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-indigo-400 h-2.5 rounded-full"
                  style={{ width: `${goal.progress}` }}
                ></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalSection;
