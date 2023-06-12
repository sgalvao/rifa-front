import { AuthForm } from "@/components/Auth";
import dynamic from "next/dynamic";
import PageLoader from "@/components/PageLoader";
const Base = dynamic(() => import("@/templates/Base"), {
  ssr: false,
  loading: () => <PageLoader />,
}) ;
import { getSession } from "next-auth/react";
import Head from "next/head";
import { GetServerSidePropsContext } from "next/types";

export default function Login() {
  return (
    <Base>
      <Head>
        <title>Maquina de prêmios</title>
      </Head>
      <AuthForm />
    </Base>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (session) {
    context.res.setHeader("Location", "/");
    context.res.statusCode = 302;
    return {
      props: {
        session,
      },
    };
  }

  return { props: {} };
}
