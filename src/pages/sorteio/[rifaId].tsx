import { GiveawayPage } from "@/components/GiveawayPage";
import { GetServerSidePropsContext } from "next/types";
import { LOAD_RIFA } from "@/GraphQL/Queries/rifa";
import { initializeApollo } from "@/utils/apollo";
import { LoadRifa } from "@/types/api";
import Head from "next/head";
import { Base } from "@/templates/Base";

type RifaProps = {
  loadRifa: LoadRifa;
};

export default function Rifa(data: RifaProps) {
  return (
    <Base noFooter>
      <Head>
        <title>{data.loadRifa.name}</title>
      </Head>
      <GiveawayPage {...data} />
    </Base>
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

  return {
    props: { loadRifa },
  };
}
