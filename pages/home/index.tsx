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

export const contain = "container mx-auto px-4";
const Home: NextPage = () => {
  return (
    <div className={``}>
      <Head>
        <title>Mercy Brandin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="">
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
