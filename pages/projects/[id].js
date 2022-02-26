import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getAllProjectIds, getProjectData } from "../../lib/projects";
import Date from "../../components/Date";
import Layout from "../../components/Layout";

export const getStaticPaths = async () => {
  const paths = await getAllProjectIds();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData
    }
  };
};

const Project = ({ projectData }) => {
  const {
    title,
    date,
    summary,
    features,
    role,
    image,
    logo,
    tech,
    liveCode,
    gitHub
  } = projectData;

  const paragraphClasses = [
    "my-5",
    "py-5",
    "px-4",
    "w-11/12",
    "sm:w-3/4",
    "md:w-1/2",
    "xl:w-1/3",
    "lg:text-lg",
    "xl:text-xl",
    "bg-primary-100",
    "dark:bg-tertiary-100"
  ];

  const projectLogo = ["mx-auto", "relative", "rounded-lg", "overflow-hidden"];

  const h2Classes = ["mt-5", "text-xl", "font-black"];

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-col items-center">
        <section className="flex flex-col items-center">
          <h1 className="text-2xl mb-2">{title}</h1>
          <span>
            <Date dateString={date} />
          </span>
          <div className="my-5 w-11/12 lg:w-3/4">
            <Link href={liveCode}>
              <a>
                <img src={image} key={image} />
              </a>
            </Link>
          </div>
          <h2 className={h2Classes.join(" ")}>Project Summary</h2>
          <p className={paragraphClasses.join(" ")}>{summary}</p>
          <h2 className={h2Classes.join(" ")}>Project Features</h2>
          <p className={paragraphClasses.join(" ")}>{features}</p>
          <h2 className={h2Classes.join(" ")}>Project Role</h2>
          <p className={paragraphClasses.join(" ")}>{role}</p>
        </section>
        <section className="mt-5 mb-10 flex flex-col items-center">
          <h2 className={h2Classes.join(" ")}>Techonologies</h2>
          <div className="mt-5 flex flex-wrap justify-center">
            {tech.map((tech) => {
              return (
                <div key={tech} className="ml-3">
                  {tech === "/images/mongoose-logo.jpg" ? (
                    <Image src={tech} height={60} width={160} />
                  ) : (
                    <Image src={tech} height={60} width={60} />
                  )}
                </div>
              );
            })}
          </div>
        </section>
        <section className="flex flex-col items-center">
          <h2 className={h2Classes.join(" ")}>Check Out My Project:</h2>
          <nav className="mt-5 mb-10 flex flex-row justify-center">
            <Link href={liveCode}>
              <a>
                <div className={projectLogo.join(" ")}>
                  <Image src={logo} height={60} width={60} />
                </div>
              </a>
            </Link>
            <Link href={gitHub}>
              <a className="ml-5">
                <Image src="/images/github.png" height={60} width={60} />
              </a>
            </Link>
          </nav>
        </section>
      </div>
    </Layout>
  );
};

export default Project;
