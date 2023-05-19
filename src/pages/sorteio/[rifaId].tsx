import { GiveawayPage } from "@/components/GiveawayPage";
import { GetServerSidePropsContext } from "next/types";
import { LOAD_RIFA } from "@/GraphQL/Queries/rifa";
import { initializeApollo } from "@/utils/apollo";
import { LoadRanking, LoadRifa } from "@/types/api";
import Head from "next/head";
import { Base } from "@/templates/Base";
import { LOAD_RANKING } from "@/GraphQL/Queries/ranking";
import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import { Flex } from "@/styles/flex";
import { Text } from "@nextui-org/react";

type RifaProps = {
  loadRifa: LoadRifa;
  loadRanking: LoadRanking;
};

export default function Rifa(data: RifaProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  return (
    <>
      {!loading ? (
        <Base>
          <Head>
            <title>{data.loadRifa.name}</title>
          </Head>
          <GiveawayPage {...data} />
        </Base>
      ) : (
        <Flex
          direction={"column"}
          align={"center"}
          justify={"center"}
          css={{ backgroundColor: "#282c34", width: "100%", height: "100vh" }}
        >
          <RingLoader size={120} color="#431CBD" loading={loading} />
        </Flex>
      )}
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
