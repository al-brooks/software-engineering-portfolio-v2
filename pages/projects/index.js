import Link from "next/link";
import Image from "next/image";
import { getSortedProjectsData } from "../../lib/projects";
import Date from "../../components/Date";

export const getStaticProps = async () => {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData
    }
  };
};

const Projects = ({ allProjectsData }) => {
  return (
    <section>
      <h1>My Projects</h1>
      {allProjectsData.map(({ id, date, title, logo }) => (
        <div key={id}>
          <Link href={`/projects/${id}`}>
            <a> 
              <Image
                src={logo}
                height={144}
                width={144}
                alt={`${title} logo`}
                className={"bg-black"}
              />
            </a>
          </Link>
          <br />
          <span>{title}</span>
          <br />
          <small>
            {/* {date} */}
            <Date dateString={date} />
          </small>
        </div>
      ))}
    </section>
  );
};

export default Projects;
