import { Link } from "react-router-dom";
import LOGO from "@/assets/img/header/logo.png";
import MAIN_IMAGE_01 from "@/assets/img/main/main_img_01.jpeg";
import MAIN_IMAGE_02 from "@/assets/img/main/main_img_02.jpeg";
const MainList = () => {
  return (
    <section>
      <div className="md:flex flex-wrap justify-center bg-[#fafafa] md:border-b border-b-black/10">
        <Link
          to=""
          className="md:w-full xl:w-1/3 mx-auto text-center border-b md:border-b border-black/10 lg:border-r-0 xl:border-b-0 xl:border-r pt-[46px] md:pt-[51px] lg:pt-[56px]">
          <h3 className="leading-[40px] text-[32px] font-600 lg:leading-[50px] lg:pb-0">
            Tadpole
          </h3>

          <p className="text-[14px] lg:text-[16px] text-opal-grey1 font-500 leading-[24px] pb-[18px] md:pb-[18px] lg:pb-[18px]">
            The tiny webcam with a clip
          </p>

          <div className="inline-flex justify-center items-center text-[16px] text-white bg-[#000] h-[32px] lg:h-[40px] px-5 rounded-full mb-[46px]">
            Now $129
          </div>
          <img
            src={MAIN_IMAGE_01}
            alt="main image1"
            className="w-[237px]  mx-auto"
          />
        </Link>
        <Link
          to=""
          className="md:w-1/2 xl:w-1/3 mx-auto text-center min-h-[416px] md:min-h-[376px] lg:min-h-[552px]  border-b md:border-b-0 border-black/10 md:border-r pt-[46px] md:pt-[51px] lg:pt-[56px]">
          <h3 className="leading-[40px] text-[32px] font-600 lg:leading-[50px] lg:pb-0">
            EIGENE
          </h3>

          <p className="text-[14px] lg:text-[16px] text-opal-grey1 font-500 leading-[24px] pb-[18px] md:pb-[18px] lg:pb-[18px]">
            The first professional
          </p>

          <div className="inline-flex justify-center items-center text-[16px] text-white bg-[#000] h-[40px] px-5 rounded-full mb-[46px]">
            $299
          </div>
          <img
            src={MAIN_IMAGE_02}
            alt="main image2"
            className="w-[237px]  mx-auto"
          />
        </Link>
        <Link
          to=""
          className="md:w-1/2 xl:w-1/3 mx-auto text-center min-h-[416px] md:min-h-[376px] lg:min-h-[552px] pt-[46px] md:pt-[51px]
        lg:pt-[56px]">
          <h3 className="leading-[40px] text-[32px] font-600 lg:leading-[50px] pb-1.5 lg:pb-0">
            Composer
          </h3>
          <p className="text-[14px] lg:text-[16px] text-opal-grey1 font-500 leading-[24px] pb-[73px]">
            The magic behind
          </p>
          <img src={LOGO} alt="main image3" className="w-[350px]  mx-auto" />
        </Link>
      </div>
    </section>
  );
};

export default MainList;
