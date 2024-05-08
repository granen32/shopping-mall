import navlinks from "@/assets/menu";
import { Link } from "react-router-dom";

type NavProps = {
  type: "toggle" | "normal";
  onClick?: () => void;
};

const Nav = ({ type, onClick }: NavProps) => {
  const defaultStyleString = "text-[16px] text-center tracking-[-0.05px]";
  return (
    <>
      {navlinks.map((item) => {
        const { title, link } = item;
        return (
          <Link
            to={link}
            key={title}
            className={
              type === "normal"
                ? defaultStyleString
                : defaultStyleString + " text-lg py-4"
            }
            onClick={
              onClick
                ? onClick
                : () => {
                    return;
                  }
            }>
            {title}
          </Link>
        );
      })}
    </>
  );
};

export default Nav;
