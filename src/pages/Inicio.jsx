import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import Faqs from "../components/Faqs";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Informative from "../components/Informative";
import LogoClouds from "../components/LogoClouds";
import Section from "../components/Section";
import Testimonial from "../components/Testimonial";

export default function Inicio() {
  return (
    <>
      <Banner />
      <Header />
      <Section />
      <Feature />
      {/*       <Informative /> */}
      {/*       <Testimonial /> */}
      <Faqs />
      <LogoClouds />
      <ContactUs />
      <Footer />
    </>
  );
}
