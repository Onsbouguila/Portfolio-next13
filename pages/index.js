import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";
import Header from "../sections/Header";
import Skills from "../sections/skills";

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Header />
    <Hero />
    <div className="relative">
      {/* <About /> */}
      <div className="relative">
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
  
    <Skills />
    {/* <World /> */}
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Home;
