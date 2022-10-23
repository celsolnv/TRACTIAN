import type { NextPage } from "next";
import Head from "next/head";
import { NavBar } from "../components/NavBar";

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
      <NavBar></NavBar>
    </div>
  );
};

export default Home;
