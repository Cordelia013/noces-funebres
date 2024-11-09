import React, { useRef, useState } from "react";
import HeroFooter from "../../components/hero/heroFooter";
import HeroEfffect from "../../components/hero/HeroEfffect";


const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleSound = () => {
    setIsMuted((prev) => {
      const newMutedState = !prev;
      if (videoRef.current) {
        videoRef.current.muted = newMutedState;
      }
      return newMutedState;
    });
  };

  return (
    <>
      <div className="relative h-screen w-full m-auto flex flex-col justify-between">
        <img
          className="w-40 absolute top-4 left-1/2 transform -translate-x-1/2 text-center z-30"
          src="/assets/logo.webp"
          alt="logo-studio-laika"
        />
        
        <div className="relative w-full h-full z-10">
            <HeroEfffect /> 
          <video
            ref={videoRef}
            className="fixed top-0 left-0 w-full h-full object-cover "
            src="/assets/Corpse_Bride.mp4"
            autoPlay
            muted={isMuted}
            loop
            preload="auto"
          ></video>
        </div>
       
        <div className="absolute bottom-7 pl-16  w-10/12 m-auto z-20">
          <HeroFooter isMuted={isMuted} onToggleSound={handleToggleSound} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
