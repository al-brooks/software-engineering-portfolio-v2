import Image from "next/image";
import Layout from "../components/Layout";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  return (
    <Layout>
      <ContactInfo size={100}/>
    </Layout>
  );
};

export default Contact;
