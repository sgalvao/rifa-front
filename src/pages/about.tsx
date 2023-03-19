import AboutPage from "@/components/AboutPage";
import { Base } from "@/templates/Base";
import Head from "next/head";

export default function About() {
  return (
    <Base>
      <Head>
        <title>Sobre as ações | Maquina de prêmios</title>
      </Head>
      <AboutPage />
    </Base>
  );
}
