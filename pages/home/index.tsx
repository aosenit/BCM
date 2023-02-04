import { Button } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/home/header/Header";
import About from "../../components/home/main/about";
import Features from "../../components/home/main/features";
import Guildlines from "../../components/home/main/guildlines";
import Services from "../../components/home/main/services";
import Projects from "../../components/home/main/projects";
import Team from "./team";
import Footer from "../../components/home/footer";
import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const contain = "container mx-auto px-4";
const Home: NextPage = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={``}>
      <Head>
        <title>Mercy Brandin</title>
        <link rel="icon" href="/assets/images/merciLogo.png" />
      </Head>
      <Header />
      <main className="">
        {showButton && (
          <BsFillArrowUpCircleFill
            className="hidden lg:block fixed bottom-0 right-0 m-6  p-2 text-[60px] cursor-pointer z-10"
            onClick={handleClick}
          />
        )}
        <About />
        <Features />
        <Guildlines />
        <Services />
        <Projects />
        <Team />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
