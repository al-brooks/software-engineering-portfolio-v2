import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getSortedProjectsData } from "../../lib/projects";
import Date from "../../components/Date";
import Layout from "../../components/Layout";

export const getStaticProps = async () => {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData
    }
  };
};

const Projects = ({ allProjectsData }) => {
  const projectCardClasses = [
    "mb-20",
    "sm:mb-15",
    "sm:mx-2",
    "md:mx-8",
    "h-80",
    "w-60",
    "text-center",
    "bg-primary-100",
    "dark:bg-tertiary-100",
    "hover:bg-tertiary-100",
    "hover:text-primary-100",
    "dark:hover:bg-primary-100",
    "dark:hover:text-tertiary-100",
    "rounded-xl",
    "flex flex-col justify-center"
  ];

  const projectLogo = [
    "h-40",
    "w-40",
    "mx-auto",
    "relative",
    "rounded-lg",
    "overflow-hidden"
  ];
  return (
    <Layout>
      <Head>
        <title>All Projects</title>
      </Head>
      <section className="flex flex-col items-center my-10">
        <h1 className="mb-10 text-2xl">My Projects</h1>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center">
          {allProjectsData.map(({ id, date, title, logo }) => (
            <div className={projectCardClasses.join(" ")} key={id}>
              <Link href={`/projects/${id}`}>
                <a>
                  <div className={projectLogo.join(" ")}>
                    <Image src={logo} layout="fill" alt={`${title} logo`} />
                  </div>
                  <br />
                  <span className="text-lg font-black">{title}</span>
                  <br />
                  <span className="text-md">
                    <Date dateString={date} />
                  </span>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
