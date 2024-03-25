import React from 'react'

import HeaderSection from '../HeaderSection';
import MainSection from '../MainSection';
import FooterSection from '../FooterSection';

const HomePage =() => {

    return (
        <div className="flex flex-col h-screen">
      <HeaderSection />
      <MainSection />
      <FooterSection />
    </div>

    )
}
export default HomePage