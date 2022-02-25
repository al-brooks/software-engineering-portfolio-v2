import Layout from "../components/Layout";

const About = () => {
  const sectionClasses = [
    "py-5",
    "px-10",
    "mb-10",
    "w-5/6",
    "rounded-lg",
    "bg-primary-100",
    "dark:bg-tertiary-100",
    "dark:text-primary-100"
  ];
  return (
    <Layout>
      <section className={sectionClasses.join(" ")}>
        <h1>About Me</h1>
        <p>
          I am a Data Analyst turned Software Engineer, experienced in
          Full-Stack Web Development. I enjoy both front-end and back-end
          development, and am always working to get better. IRL, I enjoy design,
          art, creative writing and boxing.
        </p>
      </section>
    </Layout>
  );
};

export default About;
