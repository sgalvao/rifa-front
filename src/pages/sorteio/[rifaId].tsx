import { GiveawayPage } from "@/components/GiveawayPage";
import { GetServerSidePropsContext } from "next/types";
import { LOAD_RIFA } from "@/GraphQL/Queries/rifa";
import { initializeApollo } from "@/utils/apollo";
import { LoadRanking, LoadRifa } from "@/types/api";
import Head from "next/head";
import { Base } from "@/templates/Base";
import { LOAD_RANKING } from "@/GraphQL/Queries/ranking";
import dynamic from "next/dynamic";

type RifaProps = {
  loadRifa: LoadRifa;
  loadRanking: LoadRanking;
};

export default function Rifa(data: RifaProps) {
  return (
    <>
      <Base>
        <Head>
          <title>{data.loadRifa.name}</title>
        </Head>
        <GiveawayPage {...data} />
      </Base>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apollo = initializeApollo(null);

  const {
    data: { loadRifa },
  } = await apollo.query({
    query: LOAD_RIFA,
    variables: {
      rifaId: context.params?.rifaId,
    },
  });

  const {
    data: { loadRanking },
  } = await apollo.query({
    query: LOAD_RANKING,
    variables: {
      rifaId: context.params?.rifaId,
    },
  });

  return {
    props: { loadRifa, loadRanking },
  };
}
