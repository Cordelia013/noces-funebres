import EffectTexture from "../EffectTexture";

function HeroEfffect() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-20 mix-blend-color-burn">
      <img
        src="/public/assets/image/img07.png"
        className="w-full h-full object-cover"      
        alt="EffetHéro"
      />
      <EffectTexture />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#b2289d8e]" />
    </div>
  );
}

export default HeroEfffect;
