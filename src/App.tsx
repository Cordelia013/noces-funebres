import React from 'react';
import Home from './section/Home/Home';
import Info from './section/infoSection/Info';


const App: React.FC = () => {
  return (
    <>
      <Home />

      <div className="bg-[#140011]">
        <Info />
      </div>
    </>
  );
}

export default App;
