import React from 'react';
import HeaderSection from '../HeaderSection';
import CreateGoalPage from '../CreateGoalPage';
import FooterSection from '../FooterSection';

const CreateGoal: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <HeaderSection />
      <CreateGoalPage />
      <FooterSection />
    </div>
  );
};

export default CreateGoal;