import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 8000);
  }, []);

  return (
    <Layout>
      <div className="text-center bg-primary-100 dark:bg-tertiary-100 my-10 p-10 rounded-lg">
        <h1 className="text-2xl mb-5">Oh no....</h1>
        <h2 className="text-xl">This page cannot be found.</h2>
      </div>
    </Layout>
  );
};

export default NotFound;