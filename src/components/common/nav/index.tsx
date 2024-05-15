import navlinks from "@/assets/menu";
import { Link, useLocation } from "react-router-dom";
import LOGO from "@/assets/img/header/logo.png";
import WLOGO from "@/assets/img/header/w-logo.png";
import { useEffect, useRef, useState } from "react";
type NavProps = {
  type: "toggle" | "normal";
  onClick?: () => void;
};
type Theme = null | "dark" | "light";
const Nav = ({ type, onClick }: NavProps) => {
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const [theme, setTheme] = useState<Theme>(null);
  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
  };
  useEffect(() => {
    setTheme(document.body.className as Theme);
  }, []);
  const handleScroll = () => {
    const logoImage = document.getElementById("logo-image") as HTMLImageElement;
    const navElement = document.getElementById("nav-element") as HTMLElement;
    const svgElement = document.querySelectorAll(
      ".top-menu button svg"
    ) as NodeListOf<SVGElement>;
    if (window.scrollY > 200 || location.pathname !== "/") {
      logoImage.src = LOGO;
      navElement.classList.remove("text-white");
      navElement.classList.add("text-black", "border-b-[1px]", "bg-white");
      svgElement.forEach((svg: SVGElement) => {
        svg.style.stroke = "#000";
      });
    } else {
      logoImage.src = WLOGO;
      navElement.classList.remove("text-black", "border-b-[1px]", "bg-white");
      navElement.classList.add("text-white");
      svgElement.forEach((svg) => {
        svg.style.stroke = "#fff";
      });
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);
  const defaultStyleString =
    "text-base font-normal block leading-[78px] whitespace-nowrap relative nav-element";
  return (
    <nav
      id="nav-element"
      ref={headerRef}
      className="text-white font-medium fixed left-0 top-[40px] w-full z-[9994] transition-colors duration-300 ease-in-out">
      <div className="wrap-ml relative z-10 max-w-[1480px] w-full mx-auto">
        <div className="gap-x-4 grid grid-cols-12">
          <div className="lg:col-span-2 xl:col-span-1">
            <Link
              to="/"
              aria-label="eigne korea"
              className="w-[108px] block mt-[29px]">
              EIGENE.AI
            </Link>
          </div>
          <div className="col-span-6 xl:col-span-9">
            <ul className="flex xl:grid grid-cols-7 xl:col-span-6 xl:gap-x-4">
              {navlinks.map((item, index) => {
                const { title, link } = item;
                return (
                  <li
                    className="first:w-[27.5%] second:w-[27.5%] xl:!w-[initial] xl:col-span-1 relative"
                    key={item.link + index}>
                    <Link
                      to={link}
                      key={title}
                      className={
                        type === "normal"
                          ? defaultStyleString
                          : defaultStyleString + "text-black"
                      }
                      onClick={onClick ? onClick : () => {}}>
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-x-4 col-span-2 flex-row-reverse">
            <div className="col-span-1">
              <Link
                to="/"
                aria-label="eigne korea"
                className="w-[108px] block mt-[29px]">
                <img
                  src={WLOGO}
                  id="logo-image"
                  alt="아이겐 코리아"
                  className="transition duration-300 ease-in-out"
                />
              </Link>
            </div>
            <div className="flex items-center justify-center top-menu">
              <button
                onClick={handleTheme}
                className="px-2"
                aria-label="Change Theme">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="transition-all duration-300 ease-out"
                  role="img"
                  stroke="#fff"
                  fill="transparent">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M11 19c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"></path>
                  <path
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M22 22l-5-5"></path>
                </svg>
              </button>
              <button aria-label="Change Theme" className="px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="transition-all duration-300 ease-out"
                  role="img"
                  stroke="#fff">
                  <circle
                    cx="11.5"
                    cy="6.5"
                    r="3.75"
                    strokeWidth="1.5"></circle>
                  <path
                    strokeWidth="1.5"
                    d="M1.78 21.25c.382-4.758 4.364-8.5 9.22-8.5h1c4.856 0 8.838 3.742 9.22 8.5H1.78z"></path>
                </svg>
              </button>
              <button aria-label="Change Theme" className="px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="transparent"
                  viewBox="0 0 24 24"
                  className="transition-all duration-300 ease-out"
                  role="img">
                  <path d="M23.073 22.253l-1.946-14.31c-.04-.38-.368-.667-.758-.667h-3.656v-1.74c0-2.543-2.115-4.613-4.713-4.613-2.599 0-4.713 2.07-4.713 4.613v1.74H3.63c-.39 0-.717.288-.758.667L.927 22.253c-.022.21.047.42.192.577.144.157.35.247.566.247h20.63c.216 0 .421-.09.566-.247.145-.157.214-.366.192-.576zM8.81 5.537c0-1.72 1.431-3.122 3.19-3.122 1.758 0 3.19 1.401 3.19 3.122v1.74H8.81v-1.74zm-6.28 16.05l1.786-12.82h2.97v1.644c0 .412.342.746.762.746.421 0 .762-.334.762-.746V8.767h6.38v1.643c0 .412.34.746.761.746.42 0 .762-.334.762-.746V8.767h2.97l1.786 12.819H2.53z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
