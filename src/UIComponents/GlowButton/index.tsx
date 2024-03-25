import React from "react";
import { useNavigate } from 'react-router-dom';

import './styles.css'

const GlowButton = () => {
  const navigate = useNavigate();

  return (
    <button 
    className="glow-button rounded-full"
    onClick={() => navigate('/CreateGoal')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};
export default GlowButton;
