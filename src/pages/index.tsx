import Homepage from "@/components/Homepage";
import { LOAD_RIFAS } from "@/GraphQL/Queries/rifa";
import { LoadRifas } from "@/types/api";
import { initializeApollo } from "@/utils/apollo";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

export default function Home(data: LoadRifas) {
  return (
    <>
      <Head>
        <title>Maquina de Prêmios</title>
      </Head>
      <Homepage {...data} />
    </>
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
