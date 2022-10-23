import type { NextPage } from "next";
import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { Panel } from "../components/Panel";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tractian</title>
        <link
          rel="shortcut icon"
          href="/favicon/tractian-favicon-ia.png"
        ></link>
      </Head>
      <NavBar />
      <Panel />
    </div>
  );
};

export default Home;
