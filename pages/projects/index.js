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
    "h-60",
    "w-60",
    "text-center"
  ];

  const projectImage = [
    "h-3/4",
    "w-3/4",
    "mx-auto",
    "relative",
    "rounded-lg",
    "overflow-hidden",
    "hover:shadow-md",
    "hover:shadow-tertiary-300",
    "dark:hover:shadow-sm",
    "dark:hover:shadow-primary-100"
  ]
  return (
    <Layout>
      <Head>
        <title>All Projects</title>
      </Head>
      <section className="flex flex-col items-center my-10">
        <h1 className="mb-10 text-2xl">My Projects</h1>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center">
          {allProjectsData.map(({ id, date, title, logo }) => (
            <div
              className={projectCardClasses.join(" ")}
              key={id}
            >
              <Link href={`/projects/${id}`}>
                <a>
                  <div className={projectImage.join(" ")}>
                    <Image
                      src={logo}
                      // height={160}
                      // width={160}
                      layout="fill"
                      alt={`${title} logo`}
                    />
                  </div>
                </a>
              </Link>
              <br />
              <span className="text-lg font-bold">{title}</span>
              <br />
              <span className="text-md">
                <Date dateString={date} />
              </span>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
