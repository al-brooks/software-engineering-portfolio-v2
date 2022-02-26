import Image from "next/image";
import Layout from "../components/Layout";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <ContactInfo size={80}/>
      <section className="w-5/6 bg-primary-100 dark:bg-tertiary-100 text-center">
        <p>Feel free to reach out</p>
      </section>
    </Layout>
  );
};

export default Contact;
