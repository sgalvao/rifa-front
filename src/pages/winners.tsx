import { WinnersPage } from "@/components/WinnersPage";
import { LOAD_WINNERS } from "@/GraphQL/Queries/winners";
import dynamic from "next/dynamic";
import PageLoader from "@/components/PageLoader";
const Base = dynamic(() => import("@/templates/Base"), {
  ssr: false,
  loading: () => <PageLoader />,
}) ;
import { WinnersProps } from "@/types/api";
import { initializeApollo } from "@/utils/apollo";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

export default function Winners(data: WinnersProps) {
  return (
    <Base>
      <Head>
        <title>Ganhadores | Maquina de prêmios</title>
      </Head>
      <WinnersPage {...data} />
    </Base>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const apollo = initializeApollo(null);

  const {
    data: { loadWinners },
  } = await apollo.query({
    query: LOAD_WINNERS,
  });

  return {
    props: { loadWinners },
  };
};
