import { ReactNode } from 'react';
import Footer from '@/components/common/footer';
import Header from '@/components/common/Header';
type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="transition duration-500 bg-white dark:bg-[#111111] text-black dark:text-white">
        <div className="flex flex-col px-10 m-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
