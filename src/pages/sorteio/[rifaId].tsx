import { GiveawayPage } from "@/components/GiveawayPage";
import { GetServerSidePropsContext } from "next/types";
import { LOAD_RIFA } from "@/GraphQL/Queries/rifa";
import { initializeApollo } from "@/utils/apollo";
import { LoadRanking, LoadRifa } from "@/types/api";
import Head from "next/head";
import dynamic from "next/dynamic";
import PageLoader from "@/components/PageLoader";
const Base = dynamic(() => import("@/templates/Base"), {
  ssr: false,
  loading: () => <PageLoader />,
}) ;
import { LOAD_RANKING } from "@/GraphQL/Queries/ranking";

type RifaProps = {
  loadRifa: LoadRifa;
  loadRanking: LoadRanking;
};

export default function Rifa(data: RifaProps) {
  return (
    <>
      <Head>
        <title>{data.loadRifa.name}</title>
      </Head>
      <Base>
        <GiveawayPage {...data} />
      </Base>
    </>
  );
}

export async function getStaticPaths() { 
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps(context: GetServerSidePropsContext) {
  const apollo = initializeApollo(null);

  try {
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
      revalidate: 120
    };
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
