import Image from "next/image";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <section>
        <a href="mailto:alexanderlawbrooks@gmail.com">
          <Image src="/images/gmail.png" height={50} width={50} />
        </a>
        <a href="https://github.com/al-brooks">
          <Image src="/images/github.png" height={50} width={50} />
        </a>
        <a href="https://www.linkedin.com/in/alexander-law-brooks/">
          <Image src="/images/linkedin.png" height={50} width={50} />
        </a>
        <a
          href="./images/AlexanderBrooks-Resume-20211124.png"
          download="alexander-brooks-resume"
        >
          <h2>Resume</h2>
        </a>
      </section>
    </Layout>
  );
};

export default Contact;
