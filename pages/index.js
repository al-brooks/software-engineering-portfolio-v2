import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import MenuCard from "../components/MenuCard";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Alexander Brooks</title>
      </Head>
      <nav className="mb-5 flex flex-col text-center">
        <MenuCard option={"About Me"} url={"/about"} />
        <MenuCard option={"Skills & Technologies"} url={"/skills"} />
        <MenuCard option={"Projects"} url={"/projects"} />
      </nav>
    </Layout>
  );
}
