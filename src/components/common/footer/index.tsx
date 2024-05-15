import FOOTER_LOGO_IMG from "@/assets/img/footer/logo_footer.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드러운 스크롤 효과
    });
  };
  return (
    <footer className="bg-white  footer-w footer-w-light border-t-[1px] mt-[20px]">
      <div className="mix-blend-difference invert">
        <div className="px-2">
          <div className="footer relative pt-[31.96px] pb-[24.66px]">
            <img src={FOOTER_LOGO_IMG} alt="logo" className="mx-auto" />
          </div>
          <div className="max-w-[1616px] mx-auto mt-[-35px] relative grid grid-cols-12 gap-x-4">
            <div className="hidden md:block col-span-4 relative border-t border-t-black/10 group-[.is]/theme-dark:border-t-black/20 pt-[41px] ">
              <p className="font-600 text-[20px] leading-[28px] mb-[20px] max-w-[254px]">
                Subscribe to the <br />
                Eigene Newsletter
              </p>
              <p className="text-[13px] leading-[24px] max-w-[247px] mb-[23px]">
                Latest news, musings, announcements and updates direct to your
                inbox.
              </p>
              <Link
                to=""
                className="footer-newsletter-link group relative w-[100px] h-10 rounded-[20px] inline-flex will-change-[background-color] bg-black hover:bg-[#000] group-[.is]/theme-dark:hover:bg-[#000] group-hover/theme-dark:deep:fill-white duration-200 transition-colors ease-ease items-center deep:fill-white deep:hover:fill-black"
                type="submit"
                aria-label="Submit">
                <svg
                  viewBox="0 0 28 20"
                  fill="#fff"
                  className="w-[24px] absolute left-[calc(100%-44px)] group-hover:left-[calc(50%-14px)] transition-[left] duration-400 ease-o3   deep:transition-colors deep:duration-300 deep:ease-o3">
                  <path d="M18,19c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L23.586,11H2c-0.552,0-1-0.448-1-1s0.448-1,1-1h21.586l-6.293-6.293c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0l8,8c0.097,0.096,0.169,0.208,0.218,0.326C26.973,9.735,27,9.863,27,9.997l0,0c0,0.002,0,0.004,0,0.006l0,0c0,0.134-0.027,0.262-0.075,0.378c-0.049,0.119-0.121,0.23-0.218,0.326l-8,8C18.512,18.902,18.256,19,18,19z"></path>
                </svg>
              </Link>
            </div>
            <div className="col-span-5 col-start-7 px-2 gap-x-4 border-t border-t-black/10 group-[.is]/theme-dark:border-t-black/20 pt-[37px]">
              <div>
                <div className="font-400 text-[13px] text-black/40 mb-[20px]">
                  Products
                </div>
                <Link
                  to=""
                  className="font-medium text-[13px] text-black hover:text-black/50 mb-[9px]">
                  Tadpole
                </Link>
                <Link
                  to=""
                  className="font-medium text-[13px] text-black hover:text-black/50 mb-[9px]">
                  Eigene ai
                </Link>
                <Link
                  to=""
                  className="font-medium text-[13px] text-black hover:text-black/50 mb-[9px]">
                  Composer
                </Link>
              </div>
              <div>
                <div className="font-400 text-[13px]  text-black/40 mb-[20px]">
                  Company
                </div>
                <Link
                  to=""
                  className="font-medium text-[13px] text-black hover:text-black/50 mb-[9px]">
                  About
                </Link>
                <Link
                  to=""
                  className="font-medium text-[13px] text-black hover:text-black/50 mb-[9px]">
                  Terms
                </Link>
                <Link
                  to=""
                  className="font-medium text-[13px] text-black hover:text-black/50 mb-[9px]">
                  Privacy
                </Link>
              </div>
              <div>
                <div className="font-400 text-[13px]  text-black/40 mb-[20px]">
                  Resources
                </div>
                <Link
                  to="mailto:support@opalcamera.com"
                  className="font-mediumtext-[13px] text-black hover:text-black/50 mb-[9px]">
                  Support
                </Link>
                <Link
                  to=""
                  className="font-medium  text-[13px] text-black hover:text-black/50 mb-[9px]">
                  Media Kit
                </Link>
                <Link
                  to=""
                  className="font-medium  text-[13px] text-black hover:text-black/50 mb-[9px]">
                  Downloads
                </Link>
                <Link
                  to=""
                  className="font-medium  text-[13px] text-black hover:text-black/50 mb-[9px]">
                  Newsletter
                </Link>
              </div>
              <div>
                <div className="font-400 text-[13px]  text-black/40 mb-[20px]">
                  Social
                </div>
                <Link
                  to=""
                  className="font-medium  text-[13px] text-black hover:text-black/50 mb-[9px]"
                  target="_blank"
                  rel="noopener noreferrer">
                  Instagram
                </Link>
                <Link
                  to=""
                  className="font-medium  text-[13px] text-black hover:text-black/50 mb-[9px]"
                  target="_blank"
                  rel="noopener noreferrer">
                  Twitter
                </Link>
              </div>
            </div>
          </div>
          <div className="max-w-[1616px] mx-auto md:pt-[64px] grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 pt-5">
            <div className="relative col-span-4 md:col-span-8 lg:col-span-12 items-center grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-10 gap-x-4 leading-[0]">
              <div className="group-[.is]/theme-dark:border-t-black/20 col-span-4 border-t border-t-black/10  text-[14px] font-medium flex justify-between w-full md:pt-0 h-[65px] md:h-[50px] items-center leading-[1] px-2 md:px-0">
                <div>EIGENE Camera Inc.</div>

                <div>All rights reserved.</div>
              </div>
              <div className="items-center md:col-span-4 lg:col-span-8 xl:col-span-6 hidden md:flex justify-end h-[65px] md:h-[50px] leading-[0]">
                <button
                  onClick={scrollToTop}
                  aria-label="Scroll to top"
                  className="jump bg-black  hover:bg-[#000] hover:text-white group-[.is]/theme-dark:hover:bg-[#000]  bg-black/10 group-[.is]/theme-dark:child:hover:fill-white transition-colors child:transition-colors duration-200 ease-ease child:duration-200 child:ease-ease w-10 h-10 rounded-full cursor-pointer">
                  TOP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
