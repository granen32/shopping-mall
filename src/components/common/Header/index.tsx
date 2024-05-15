import Nav from "@/components/common/nav";
const Header = () => {
  return (
    <>
      <header>
        <div className="ease-o6 !duration-400 transition-[height] lg:text-[14px] text-[12px] w-full relative lg:fixed z-[9994] overflow-hidden bg-[#3A2522]">
          <div className="h-[40px] flex items-center justify-center">
            <div className="text-white">
              Take $50 off any order $200 USD or more with code <b>ANY50</b>
            </div>
          </div>
        </div>
        <Nav type="normal" />
      </header>
    </>
  );
};

export default Header;
