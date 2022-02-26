import ContactInfo from "./ContactInfo";
import { useState, useEffect } from "react";

const Footer = () => {
  const footerClasses = [
    "relative",
    "bottom-0",
    "left-0",
    "right-0",
    "mx-auto",
    "mt-15",
    "mb-10",
    "w-full",
    "flex",
    "flex-col",
    "items-center"
  ];

  const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(0);
    const handleResize = () => setScreenWidth(window.innerWidth);

    useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [screenWidth]);

    return screenWidth;
  };

  const windowWidth = useScreenWidth();

  return (
    <footer className={footerClasses.join(" ")}>
      <section className="flex flex-col items-center">
        <h1 className="text-xl font-bold">Contact:</h1>
        <ContactInfo size={40} />
      </section>
      <section>
        <h1>Powered by: NextJS and TailwindCSS</h1>
      </section>
    </footer>
  );
};

export default Footer;
