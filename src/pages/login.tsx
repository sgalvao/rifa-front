import { AuthForm } from "@/components/Auth";
import { Base } from "@/templates/Base";
import { getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next/types";

export default function Login() {
  return (
    <Base>
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
