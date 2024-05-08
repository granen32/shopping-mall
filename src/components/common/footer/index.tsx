import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full font-mono flex flex-col justify-center items-center pt-10 pb-6 transition duration-500 bg-white dark:bg-[#111111] dark:text-white text-black">
      <div className="flex justify-center gap-4 items-center pt-4 border-t-2 w-full">
        <Link
          to="mailto:granen32@eigene.ai"
          className="hover:scale-110 transition-transform duration-500 hover:text-green-500 hover:fill-green-500 dark:fill-white dark:hover:fill-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
          </svg>
        </Link>
      </div>
      <div className="text-sm mt-2">Copyright © 2024 eigene.ai</div>
      <div className="text-xs mt-2">maintain.dev</div>
    </footer>
  );
};

export default Footer;
