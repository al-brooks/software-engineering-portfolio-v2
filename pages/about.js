import Layout from "../components/Layout";

const About = () => {
  const paragraphClasses = [
    "py-5",
    "px-10",
    "mb-10",
    "w-3/4",
    "md:w-1/2",
    "rounded-lg",
    "bg-primary-100",
    "dark:bg-tertiary-100"
  ];
  return (
    <Layout>
      <section className="flex flex-col items-center">
        <h1 className="text-2xl mb-5">About Me</h1>
        <p className={paragraphClasses.join(" ")}>
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
