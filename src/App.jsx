import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import Offer from "./components/Offer/Offer";
import Testimonial from "./components/Testimonial/Testimonial";
import Newsletter from "./components/Newsletter/Newsletter";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <Offer />
      <Testimonial />
      <Newsletter />
    </>
  );
}

export default App;