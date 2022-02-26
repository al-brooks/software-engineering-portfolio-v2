import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

const Layout = ({ children, home }) => {
  const layoutClasses = [
    "bg-primary-300",
    "dark:bg-tertiary-500",
    "text-tertiary-300",
    "dark:text-primary-100",
    "overflow-scroll",
    "h-screen"
  ];

  const backBtnClasses = [
    "mx-10",
    "p-2",
    "hover:text-highlight",
    "dark:text-primary-100",
    "dark:hover:text-highlight"
  ];

  return (
    <div className={layoutClasses.join(" ")}>
      <Header home={home} />
      <main className="flex flex-col items-center">{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a className={backBtnClasses.join(" ")}>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
