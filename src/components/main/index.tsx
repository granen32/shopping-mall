import MAINIMAGE from "@/assets/img/main/main.webp";
import MainList from "./list";
const Main = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute left-0 top-0 w-full h-full">
          <div className="max-w-[1648px] px-4 mx-auto gap-x-4 lg:grid grid-cols-12 h-full">
            <div className="col-span-10 col-start-2">
              <div
                className="text-center lg:text-left pt-[157px] md:pt-[170px] lg:pt-[275px] 
            ">
                <p className="hero-title text-[24px] md:text-[32px] xl:text-[40px] xl:leading-[48px] 4xl:text-[48px] 4xl:leading-[52px] md:leading-[40px] md:font-300 tracking-common text-white font-400 leading-[32px] lg:text-left">
                  <span className="y-w block">
                    <span className="y">First experience</span>
                  </span>
                  <span className="y-w block">
                    <span className="y">at Granen Korea.</span>
                  </span>
                </p>
                <button className="hero-button font-400 inline-flex justify-center items-center text-[16px] mt-[15px] h-[40px] px-5 pt-0 rounded-full bg-[#000] text-white">
                  Available now for $129.
                </button>
              </div>
            </div>
          </div>
        </div>
        <picture className="">
          <source srcSet={MAINIMAGE} />
          <img src={MAINIMAGE} alt="Granen MAIN" />
        </picture>
      </div>
      <MainList />
    </>
  );
};

export default Main;
