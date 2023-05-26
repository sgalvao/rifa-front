import Homepage from "@/components/Homepage";
import { LOAD_RIFAS } from "@/GraphQL/Queries/rifa";
import { LoadRifas } from "@/types/api";
import { initializeApollo } from "@/utils/apollo";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import PageLoader from "@/components/PageLoader";
const Base = dynamic(() => import("@/templates/Base"), {
  ssr: false,
  loading: () => <PageLoader />,
}) ;

export default function Home(data: LoadRifas) {
  return (
    <Base>
      <Head>
        <title>Maquina de Prêmios</title>
      </Head>
      <Homepage {...data} />
    </Base>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apollo = initializeApollo(null);

  const {
    data: { loadRifas },
  } = await apollo.query({
    query: LOAD_RIFAS,
  });

  return {
    props: { loadRifas },
  };
}
