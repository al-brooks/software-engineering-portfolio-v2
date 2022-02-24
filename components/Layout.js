import Head from "next/head";
import Header from "./Header";
import Link from "next/link";

const Layout = ({ children, home }) => {
  return (
    <div>
      <Header home={home} />
      <main className="flex flex-col items-center">{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
