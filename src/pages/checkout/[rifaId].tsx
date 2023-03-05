import protectedRoutes from "@/utils/protectedRoutes";
import { GetServerSidePropsContext } from "next/types";
import CheckoutPage from "@/components/Checkout/index";

export default function Checkout() {
  return <CheckoutPage />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);

  if (!session) {
    return { props: {} };
  }

  return {
    props: { session },
  };
}
