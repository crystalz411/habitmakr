import React, { useState, useEffect } from 'react';

interface Goal {
  id: number;
  title: string;
  deadline: string;
  completed: boolean;
}

const ProgressSection: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([]);

  useEffect(() => {
    // Fetch goals from an API or local storage
  }, []);

  const calculateProgress = () => {
    const completedGoals = goals.filter((goal) => goal.completed);
    const progress = (completedGoals.length / goals.length) * 100;
    return Math.round(progress);
  };

  const calculateStreak = () => {
    // Calculate the current streak based on consecutive completed goals
    return 0;
  };

  return (
    <main className="flex-grow p-4 overflow-y-auto mb-28">
      <h2 className="text-2xl font-bold mb-4">Progress</h2>
      <div className="mb-8">
        <p className="text-lg">Goals Completed: {calculateProgress()}%</p>
        <p className="text-lg">Current Streak: {calculateStreak()} days</p>
      </div>
      {/* Add progress charts or visualizations */}
    </main>
  );
};

export default ProgressSection;