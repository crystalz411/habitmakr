import React from 'react';
import HeaderSection from '../HeaderSection';
import ProgressSection from '../ProgressSection';
import FooterSection from '../FooterSection';

const ProgressPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <HeaderSection />
      <ProgressSection />
      <FooterSection />
    </div>
  );
};

export default ProgressPage;