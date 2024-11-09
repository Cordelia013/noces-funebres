import React from "react";

function InfoSection() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center text-[#e9eef5]">
        <div className="absolute">
          <img
            className="w-[237px] h-[242px] origin-top-left rotate-[-10deg] relative top-72 right-[28rem]"
            src="/public/assets/les_noces_funebres 09.png"
            alt="image de stele"
          />
        </div>
        <div className="relative top-96 left-[29rem]">
          <img
            className="w-[237px] h-[242px] origin-top-left rotate-[8deg] "
            src="/public/assets/les_noces_funebres 11.png"
            alt="image de rose"
          />
        </div>

        <div
          className=" relative text-center 
                      text-[50px] tablet:text-[100px] laptop:text-[150px] desktop:text-[200px] 
                      font-bold font-['BROTHER'] uppercase leading-[100px] tablet:leading-[200px] laptop:leading-[300px] desktop:leading-[350px]"
        >
          Les Noces
          <br />
          Funèbres
        </div>
        <div className=" w-2/12 z-10 font-normal text-base  ">
          <span className="font-bold font-['EudoxusSans']">
            Victor Van Dort, un jeune homme timide, est fiancé à Victoria
            Everglot dans un mariage arrangé.
          </span>
          <br /> <br />
          <div className="opacity-50">
            Lorsqu’il s’entraîne à réciter ses vœux dans la forêt, il les
            prononce sans le savoir devant la tombe d’Emily, une jeune femme
            décédée, qui croit alors qu’ils sont mariés. Transporté dans le
            royaume des morts, Victor découvre un monde coloré et animé, en
            contraste frappant avec le monde des vivants.
          </div>
        </div>

  
      </div>
    </>
  );
}

export default InfoSection;
