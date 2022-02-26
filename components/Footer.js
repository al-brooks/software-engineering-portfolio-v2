import ContactInfo from "./ContactInfo";

const Footer = () => {
    const footerClasses = [
        "absolute",
        "bottom-0",
        "left-0",
        "right-0",
        "mx-auto",
        "mb-10",
        "w-full",
        "flex",
        "flex-col",
        "items-center"
    ];

  return (
    <footer className={footerClasses.join(" ")}>
      <section className="flex flex-row items-center mb-5">
        <h1 className="mr-5 text-xl font-bold">Contact Me:</h1>
        <ContactInfo size={50} />
      </section>
      <section>
        <h1>Powered by: NextJS and TailwindCSS</h1>
      </section>
    </footer>
  );
};

export default Footer;
