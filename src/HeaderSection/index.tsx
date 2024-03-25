import React from 'react';
import Profile from '../Profile/index'

const HeaderSection: React.FC = () => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);

  return (
    <header className="flex justify-between items-center p-4 sticky top-0 z-10 bg-indigo-400/30 backdrop-blur-md rounded-b-lg">
      <div>
        <h1 className=" text-2xl font-extrabold text-white">Welcome, Acha 👋🏻</h1>
        <p className="text-sm text-white font-bold">{formattedDate}</p>
      </div>
      <Profile/>
    </header>
  );
};

export default HeaderSection;