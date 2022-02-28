import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import MenuCard from "../components/MenuCard";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Alexander Brooks</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <nav className="mb-5 flex flex-col text-center">
        <MenuCard option={"About Me"} url={"/about"} />
        <MenuCard option={"Skills & Technologies"} url={"/skills"} />
        <MenuCard option={"Projects"} url={"/projects"} />
      </nav>
    </Layout>
  );
}
