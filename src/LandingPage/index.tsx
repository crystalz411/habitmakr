import React from 'react';
import MeditateGif from '../assets/juicy-woman-in-workflow-multitasking.gif'

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-8 text-center max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-6">Build Small Habits, Build Your <a className=' text-indigo-400'>Better Self</a></h1>
        <div className="mb-8">
          <img src={MeditateGif} alt="Meditation Illustration" className=" w-80 h-80 mx-auto" />
        </div>
        <a href='/HomePage' className="bg-indigo-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300">
          Get Started
        </a>
        <p className="mt-4 text-gray-600">Already have an account? <a href="/signin" className="text-indigo-400 hover:underline">Sign In</a></p>
      </div>
    </div>
  );
};

export default LandingPage;