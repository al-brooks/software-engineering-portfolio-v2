import Image from "next/image";

const ContactInfo = ({ size }) => {
  const imageClasses = ["ml-3","p-2","hover:shadow-md", "hover:shadow-tertiary-300", "dark:hover:shadow-sm","dark:hover:shadow-primary-100"];
  return (
    <div className="flex flex-row flex-wrap items-center my-2">
      <a
        href="mailto:alexanderlawbrooks@gmail.com"
        className={imageClasses.join(" ")}
      >
        <Image src="/images/gmail.png" height={size} width={size} />
      </a>
      <a href="https://github.com/al-brooks" className={imageClasses.join(" ")}>
        <Image src="/images/github.png" height={size} width={size} />
      </a>
      <a
        href="https://www.linkedin.com/in/alexander-law-brooks/"
        className={imageClasses.join(" ")}
      >
        <Image src="/images/linkedin.png" height={size} width={size} />
      </a>
      <a
        href="./images/AlexanderBrooks-Resume-20211124.png"
        download="alexander-brooks-resume"
        className={imageClasses.join(" ")}
      >
        <Image src="/images/resume-icon-final.png" height={size} width={size} />
      </a>
    </div>
  );
};

export default ContactInfo;
