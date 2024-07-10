import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
const Layout: () => React.JSX.Element = () => {
  return (
    <>
      <Header />
      <main className="transition duration-500 dark:bg-[#111111] text-black dark:text-white">
        <div className="flex flex-col  mx-auto">
          <Suspense fallback={"loading..."}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
