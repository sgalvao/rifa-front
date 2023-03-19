import protectedRoutes from "@/utils/protectedRoutes";
import { GetServerSidePropsContext } from "next/types";
import CheckoutPage, { PaymentProps } from "@/components/Checkout/index";
import { getSession } from "next-auth/react";
import { Base } from "@/templates/Base";
import { initializeApollo } from "@/utils/apollo";
import { LOAD_PAYMENT_BY_ID } from "@/GraphQL/Queries/payment";
import { LOAD_RIFA } from "@/GraphQL/Queries/rifa";

export default function Checkout(data: PaymentProps) {
  return (
    <Base>
      <CheckoutPage {...data} />
    </Base>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  const apollo = initializeApollo(null, session);

  if (!session) {
    return {
      props: {},
      redirect: {
        destination: `/login`,
        permanent: false,
      },
    };
  }
  const {
    data: { loadPaymentById },
  } = await apollo.query({
    query: LOAD_PAYMENT_BY_ID,
    variables: {
      id: context.query.paymentId,
    },
  });

  const {
    data: {
      loadRifa: { name },
    },
  } = await apollo.query({
    query: LOAD_RIFA,
    variables: {
      rifaId: context.params?.rifaId,
    },
  });

  return {
    props: { session, loadPaymentById, name },
  };
}
