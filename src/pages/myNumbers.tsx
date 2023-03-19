import { MyNumber, PurchasedListProps } from "@/components/MyNumber";
import { LOAD_PURCHASED_NUMBERS } from "@/GraphQL/Queries/payment";
import { Base } from "@/templates/Base";
import { initializeApollo } from "@/utils/apollo";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";

export default function MyNumbers(data: PurchasedListProps) {
  return (
    <Base>
      <Head>
        <title>Meus Números | Maquina de prêmios</title>
      </Head>
      <MyNumber {...data} />
    </Base>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context);
  const apollo = initializeApollo(null, session);

  if (!session) {
    return {
      props: {},
      redirect: {
        destination: `/login?callbackUrl=${context.resolvedUrl}`,
        permanent: false,
      },
    };
  }

  const {
    data: { loadPurchasedNumbers },
  } = await apollo.query({
    query: LOAD_PURCHASED_NUMBERS,
  });

  return {
    props: {
      loadPurchasedNumbers,
    },
  };
};
