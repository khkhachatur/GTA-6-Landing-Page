import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Hero from "./Section/Hero";
import Navbar from "./Section/Navbar";
import FirstVideo from "./Section/FirstVideo";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <FirstVideo />
    </main>
  );
};

export default App;
