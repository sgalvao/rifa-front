import AboutPage from "@/components/AboutPage";
import dynamic from "next/dynamic";
import PageLoader from "@/components/PageLoader";
const Base = dynamic(() => import("@/templates/Base"), {
  ssr: false,
  loading: () => <PageLoader />,
});
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
