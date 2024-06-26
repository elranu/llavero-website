import { Cta } from './components/Cta';
//import { FAQ } from "./components/FAQ";
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Navbar } from './components/Navbar';
import { Slogan } from './components/Slogan';
//import { Pricing } from "./components/Pricing";
import { ScrollToTop } from './components/ScrollToTop';
import { Services } from './components/Services';
//import { Sponsors } from "./components/Sponsors";
import { Team } from './components/Team';
//import { Testimonials } from "./components/Testimonials";
import './App.css';
import { inject } from '@vercel/analytics';
import StarUsOnGitHub from './components/StarUsOnGitHub';
import { JoinUs } from './components/JoinUs';

function App() {
  inject();
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About /> */}

      <Features />

      <HowItWorks />
      <Cta />
      <Services />
      {/* <Sponsors /> */}
      <JoinUs />
      {/* <Testimonials /> */}
      <Team />
      {/* <Pricing /> */}
      <Slogan />
      {/* <FAQ /> */}

      <Footer />
      <ScrollToTop />
      <StarUsOnGitHub />
    </>
  );
}

export default App;
