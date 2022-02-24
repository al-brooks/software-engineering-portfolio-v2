import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";

const Skills = () => {
  const skills = [
    { name: "HTML", image: "/images/html.png" },
    { name: "CSS", image: "/images/css.png" },
    { name: "Bootstrap", image: "/images/bootstrap.png" },
    { name: "Sass", image: "/images/sass.png" },
    { name: "JavaScript", image: "/images/javascript.png" },
    { name: "TypeScript", image: "/images/Typescript.png" },
    { name: "React", image: "/images/react-js.png" },
    { name: "Next", image: "/images/nextjs-logo.png" },
    { name: "Redux", image: "/images/redux.png" },
    { name: "NodeJS", image: "/images/node-js-logo.png" },
    { name: "PostgreSQL", image: "/images/postgreSQL.png" },
    { name: "MongoDB", image: "/images/mongodb-logo.png" },
    { name: "Mongoose", image: "/images/mongoose-logo.jpg" }
  ];
  return (
    <Layout>
      <Head>
        <title>Skills & Technologies</title>
      </Head>
      <section className="flex flex-wrap w-1/2">
        {skills.map((skill) => {
          return (
            <div key={skill.name} className="flex flex-col items-center mx-5">
              <h4 className="my-5">{skill.name}</h4>
              {skill.name === "Mongoose" ? (
                <Image src={skill.image} height={100} width={200} />
              ) : (
                <Image src={skill.image} height={100} width={110} />
              )}
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default Skills;
