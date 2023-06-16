import FirstSection from "./FirstSection";
import Footer from "./Footer";
import FourthSection from "./Fourth";
import Nav from "./NavBar";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

const Home = () => {
  return (
    <>
      <Nav />
      <div>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
