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
    tech,
    liveCode,
    gitHub
  } = projectData;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <p>
        <Date dateString={date} />
      </p>
      <p>{summary}</p>
      <p>{features}</p>
      <p>{role}</p>
      <h2>Images</h2>
      <div className={"relative h-96"}>
        <Image src={image} layout="fill" objectFit="contain" key={image} />
      </div>
      <h2>Techonologies</h2>
      <div>
        {tech.map((tech) => {
          return <Image src={tech} height={100} width={100} />;
        })}
      </div>
      <Link href={liveCode}>
        <a>Live Code</a>
      </Link>
      <Link href={gitHub}>
        <a>GitHub</a>
      </Link>
    </Layout>
  );
};

export default Project;
