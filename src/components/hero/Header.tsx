function Header() {
  return (
    <div className="flex justify-between p-5 sticky top-0 z-10" id="header">
      <img className="w-20 z-10" src="/assets/logo.webp" />
      <div className="flex items-center z-10">
        <p className="text-white">Music</p>
        <p className="text-white ml-4">ON / OFF</p>
      </div>
      <div className="absolute -bottom-0 left-0 w-full h-[5rem] bg-gradient-to-b from-transparent to-[#140011]" />
    </div>
  );
}

export default Header
