import { GiveawayPage } from "@/components/GiveawayPage";
import { GetServerSidePropsContext } from "next/types";
import { LOAD_RIFA } from "@/GraphQL/Queries/rifa";
import { initializeApollo } from "@/utils/apollo";
import { LoadRifa } from "@/types/api";
import Head from "next/head";

type Props = {
  loadRifa: LoadRifa;
};

export default function Rifa(data: Props) {
  return (
    <>
      <GiveawayPage {...data} />
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

  return {
    props: { loadRifa },
  };
}
