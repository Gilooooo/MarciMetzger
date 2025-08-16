import AboutPage from "./_components/AboutUs";
import ChooseUs from "./_components/ChooseUs";
import ContactPage from "./_components/Contact";
import FindHome from "./_components/FindHome";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import NavBar from "./_components/NavBar";
import Partners from "./_components/Partners";
import Properties from "./_components/Properties";
import StatisfiedCustomer from "./_components/SatisfiedCustomer";

export default function Home() {
  return (
    <>
      <NavBar />
      <div id="home" className=" scroll-mt-22">
        <Hero />
      </div>
      <FindHome />
      <div id="about" className=" scroll-mt-20">
        <AboutPage />
      </div>
      <Properties />
      <ChooseUs />
      <StatisfiedCustomer />
      <div id="contact" className=" scroll-mt-20">
        <ContactPage />
      </div>
      <Partners />
      <Footer />
    </>
  );
}
