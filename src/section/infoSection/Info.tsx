import Header from "../../components/hero/Header";

function Info() {
  return (
    <div className="h-screen mt-[150vh] bg-[#140011] " id="info">
      <Header />

      <div className="relative flex justify-center content-center z-0 bg-[#140011]">
        <div
          className=" text-center 
                      text-[50px] tablet:text-[100px] laptop:text-[150px] desktop:text-[200px] 
                      font-bold font-['BROTHER'] uppercase leading-[100px] tablet:leading-[200px] laptop:leading-[300px] desktop:leading-[100px]"
        >
          {/* texte */}
          <div className="flex z-0">
            <div className="relative pt-36 z-10">
              <img src="assets/noces+texture.png" alt="Texture17+03" />
              <img
                className=" relative bottom-28"
                src="/assets/image/funebre-grp.png"
                alt="Texture17+03"
              />

              {/* <p className="font-TrashSecret z-10 text-[#F0A8FF]"> Funèbres</p> */}
            </div>
          </div>
        </div>
        <div className="absolute ">
          <img
            className="w-44 origin-top-left rotate-[-10deg] relative right-[38rem] top-[36rem]  "
            src="/assets/image/img09.png"
            alt="image de stele"
          />

          <img
            className="w-44 origin-top-left rotate-[8deg] relative left-[38rem] bottom-[12rem] "
            src="/assets/image/img11.png"
            alt="image de rose"
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
