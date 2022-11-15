import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import BackgroundCanvas from "../components/BackgroundCanvas";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import dynamic from "next/dynamic";
const DynamicHeader = dynamic(() => import("../components/Header"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    // set a default class to dark to the whole document
    // setting the screen to snap and scrollable
    <div className="dark:bg-[rgb(36,36,36)] dark:text- h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Yew Kong&apos;s Portfolio</title>
      </Head>

      {/* Background Canvas - Optional */}
      {/* <BackgroundCanvas /> */}

      <DynamicHeader />

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
