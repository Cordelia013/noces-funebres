
import HeroEfffect from "../../components/hero/HeroEfffect";

function Home() {
  return (
    <div className="h-screen relative" id="scrollIntro">
      <video
        className="fixed w-full h-[52rem] object-cover "
        preload="none"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/video/corpse_bride.mp4" />
      </video>
      <HeroEfffect />
      {/* <div className="absolute -bottom-0 left-0 w-full h-2/3 bg-gradient-to-b from-[#14001113] to-[#140011]" /> */}

      <div className="absolute w-full top-0 flex justify-center mt-7 px-1 z-20 text-white">
        <img className="w-40" src="/assets/logo.webp" alt="logo" />
      </div>
      <div className="absolute -bottom-0 left-0 w-full h-2/3 bg-gradient-to-b from-[#14001113] to-[#140011]" />
    </div>
  );
}

export default Home;
