import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Alexander Brooks</title>
      </Head>
      <Link href="/about">
        <a>
          <div>
            <h2>About Me</h2>
          </div>
        </a>
      </Link>
      <Link href="/skills">
        <a>
          <div>
            <h2>Skills & Technologies</h2>
          </div>
        </a>
      </Link>
      <Link href="/projects">
        <a>
          <div>
            <h2>Projects</h2>
          </div>
        </a>
      </Link>
      <Link href="/contact">
        <a>
          <div>
            <h2>Contact Me</h2>
          </div>
        </a>
      </Link>
    </Layout>
  );
}
