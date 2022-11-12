import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import BackgroundCanvas from "../components/BackgroundCanvas";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";

const Home: NextPage = () => {
  return (
    // setting the screen to snap and scrollable
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Yew Kong&apos;s Portfolio</title>
      </Head>

      {/* Background Canvas - Optional */}
      {/* <BackgroundCanvas /> */}

      <Header />

      {/* Landing Page */}
      {/* snap to the center  */}
      <section id="landingpage" className="snap-start">
        <LandingPage />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Contact Me */}
    </div>
  );
};

export default Home;
