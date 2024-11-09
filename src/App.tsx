import React from 'react';
import HeroSection from './section/heroSection';
import InfoSection from './section/infoSection';
// import PersonSection from './section/personSection';

const App: React.FC = () => {
  return (
    <div className="">
      <HeroSection />
      <InfoSection />
      {/* <PersonSection /> */}
    </div>
  );
}

export default App;
