import Head from "next/head";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <Head>
        <title>Oh no...</title>
      </Head>
      <div className="text-center bg-primary-100 dark:bg-tertiary-100 my-10 p-10 rounded-lg">
        <h1 className="text-2xl mb-5">Oh no....</h1>
        <h2 className="text-xl">This page cannot be found.</h2>
      </div>
    </Layout>
  );
};

export default NotFound;
