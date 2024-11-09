import React from 'react';

interface HeroFooterProps {
  isMuted: boolean; // Prop pour savoir si la vidéo est muette
  onToggleSound: () => void; // Fonction pour basculer le son
}

const HeroFooter: React.FC<HeroFooterProps> = ({ isMuted, onToggleSound }) => {
  return (
    <>
      <div className="flex justify-between items-end h-full ">
        <img
          className="w-12 h-10 text-white"
          src="/assets/logo.webp"
          alt="logo laika-studio"
        />
        <div className="w-12 flex text-white items-end">
          <p>MUSIC</p>
          <button onClick={onToggleSound} className="ml-2">
            {isMuted ? <p>ON/<span className='opacity-45'>OFF</span></p> : <p> <span className='opacity-45'>ON</span>/OFF</p>}
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroFooter;
