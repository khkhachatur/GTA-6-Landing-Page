import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Hero from "./Section/Hero";
import Final from "./Section/Final";
import Lucia from "./Section/Lucia";
import Jason from "./Section/Jason";
import Navbar from "./Section/Navbar";
import PostCard from "./Section/PostCard";
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
      <Lucia />

      <PostCard />

      <Final />
    </main>
  );
};

export default App;
