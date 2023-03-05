import NextAuth, { NextAuthOptions } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import CredentialsProvider from "next-auth/providers/credentials";

import { LOGIN_QUERY } from "@/GraphQL/Queries/user";

import { createApolloClient } from "@/utils/apollo";
import { UserProps } from "@/types/api";

type AuthorizeProps = {
  phone: string;
};

const apolloClient = createApolloClient();

const options = {
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Sign-in",
      credentials: {},
      // @ts-ignore
      async authorize({ phone }: AuthorizeProps) {
        const { data } = await apolloClient.query({
          query: LOGIN_QUERY,
          fetchPolicy: "no-cache",
          variables: {
            phone,
          },
        });

        const user = data.login;

        if (user) {
          return {
            ...user,
            jwt: user.token,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }: any) => {
      session.accessToken = token.accessToken;

      if (token.user) session.user = token.user as UserProps;

      return session;
    },

    jwt: async ({ token, user }: any) => {
      if (user) {
        token.user = user;
        token.accessToken = user.jwt;
      }

      return token;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
  jwt: {
    strategy: "jwt",
  },
} as NextAuthOptions;

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default Auth;
