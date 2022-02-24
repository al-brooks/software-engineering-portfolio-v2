import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function Home({ allProjectsData }) {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <section className="flex sm:justify-center space-x-4">
        {[
          ["Home", "/dashboard"],
          ["About", "/about"],
          ["Projects", "/projects"],
          ["Skills", "/skills"]
        ].map(([title, url]) => (
          <div>
            <Link
              href={url}
              className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
            >
              <a>{title}</a>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
