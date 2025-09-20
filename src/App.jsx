import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Hero from "./Section/Hero";
import Jason from "./Section/Jason";
import Navbar from "./Section/Navbar";
import FirstVideo from "./Section/FirstVideo";
import SecondVideo from "./Section/SecondVideo";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <FirstVideo />
      <Jason />

      <SecondVideo />
    </main>
  );
};

export default App;
