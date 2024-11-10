import React, { useState, useEffect, useRef } from "react";
 import HeroFooter from "../../components/hero/Header";
import HeroEfffect from "../../components/hero/HeroEfffect";

const HeroSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("loadeddata", handleLoadedData);
    }
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("loadeddata", handleLoadedData);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[800px] ">
      <div className="flex justify-center items-center pt-10">
        <img className=" absolute z-30 w-28 " src="/assets/logo.webp" alt="" />
      </div>
      <HeroEfffect />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <span className="text-white">Chargement...</span>
        </div>
      )}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/corpse_bride.mp4"
        autoPlay
        muted
        loop
        preload="auto"
      />
      
      <HeroFooter
        isMuted={false}
        onToggleSound={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default HeroSection;
