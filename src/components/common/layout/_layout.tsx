import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "@/components/common/footer";
import Header from "@/components/common/Header";
const Layout = () => {
  return (
    <>
      <Header />
      <main className="transition duration-500 bg-white dark:bg-[#111111] text-black dark:text-white pt-[15px]">
        <div className="flex flex-col  m-auto">
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
