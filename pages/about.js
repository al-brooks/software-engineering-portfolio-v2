import Layout from "../components/Layout";
import Head from "next/head";

const About = () => {
  const paragraphClasses = ["py-2", "px-4", "lg:text-lg", "xl:text-xl"];

  const divClasses = [
    "pb-5",
    "mb-10",
    "w-11/12",
    "sm:w-3/4",
    "md:w-1/2",
    "bg-primary-100",
    "dark:bg-tertiary-100"
  ];
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <section className="flex flex-col items-center">
        <h1 className="text-2xl mb-5">About Me</h1>
        <div className={divClasses.join(" ")}>
          <p className={`${paragraphClasses.join(" ")} mt-5`}>
            Hi, I&rsquo;m Alex
          </p>
          <p className={paragraphClasses.join(" ")}>
            I used to be a Data Analyst, but made the transition to Software
            Engineering after spending my free time the past 2 years learning
            about programming. Shout out to all of the great humans in tech out
            there who have developed and shared so much inspiring content,
            resources and help to those who want to learn - including me.
          </p>
          <p className={paragraphClasses.join(" ")}>
            I&rsquo;m skilled in Full Stack Web Development, and C++ (feel free
            to check out some of the technologies I&rsquo;ve worked on this
            site). I've been learning modern C++ this year, as well as Data
            Structures & Algorithms in order to round out my skills. I've been
            really interested in creating backend software solutions, and C++
            has always been a tool that I've been interested in learning because
            of the nuance and complexity that comes with it. Since I'm not
            coming from a traditional background in Computer Science, I'm doing
            everything I can to be able to produce the work expected from
            quality engineers.
          </p>
          <p className={paragraphClasses.join(" ")}>
            Outside of tech, I have a lot of interests that inspire me.
            I&rsquo;m really into design, drawing, and writing. It can't be
            understated that I LOVE animation and story telling. I'm a huge
            Pixar, Marvel and Anime fan. I&rsquo;m really into music - Soul,
            Rap, Pop, Reggaeton, Salsa, and Bachata. I actually made a fake
            brand site for one of my favorite artists when I started to learn
            React and Redux (Also, feel free to check it out!). Also - in an
            unexpected interest pivot, I love boxing, and find martial arts
            amazing - I&rsquo;ve even had a couple of Amatuar Boxing matches in
            college. After all is said and done, I enjoy being open to new
            experiences and learning.
          </p>
          <p className={paragraphClasses.join(" ")}>
            I like to take that same enthusiasm into my career. I like meeting
            and working with creative people who also add their own flairs to
            their work. To me, that&rsquo;s the only way you can make something
            that truly stands the test of time. And acknowledging the imperfect,
            while also striving to make improvements everyday resonates with me.
            I&rsquo;m still learning each day, and want to be great at
            everything I do. If you&rsquo;ve read to this point, I&rsquo;d like
            to thank you for taking the time. If you&rsquo;re interested in
            chatting feel free to contact me - all my personal sites are below.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
