import Image from "next/image";

const ContactInfo = ({ size }) => {
  return (
    <div className="flex flex-row flex-wrap items-center">
      <a href="mailto:alexanderlawbrooks@gmail.com" className="mr-5">
        <Image src="/images/gmail.png" height={size} width={size} />
      </a>
      <a href="https://github.com/al-brooks" className="mr-5">
        <Image src="/images/github.png" height={size} width={size} />
      </a>
      <a
        href="https://www.linkedin.com/in/alexander-law-brooks/"
        className="mr-5"
      >
        <Image src="/images/linkedin.png" height={size} width={size} />
      </a>
      <a
        href="./images/AlexanderBrooks-Resume-20211124.png"
        download="alexander-brooks-resume"
      >
        <Image src="/images/resume-icon-final.png" height={size} width={size} />
      </a>
    </div>
  );
};

export default ContactInfo;
