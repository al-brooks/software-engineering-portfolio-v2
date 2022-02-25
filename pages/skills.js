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

  const sectionClasses = [
      "mb-10",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "text-center",
    "dark:text-primary-100"
  ];

  return (
    <Layout>
      <Head>
        <title>Skills & Technologies</title>
      </Head>
      <section className={sectionClasses.join(" ")}>
        <h1>Skills & Technologies</h1>
        <div className="w-5/6 flex flex-wrap justify-center">
          {skills.map((skill) => {
            return (
              <div key={skill.name} className="flex flex-col items-center mx-5">
                <h4 className="my-5">{skill.name}</h4>
                {skill.name === "Mongoose" ? (
                  <Image src={skill.image} height={50} width={150} />
                ) : (
                  <Image src={skill.image} height={70} width={70} />
                )}
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
