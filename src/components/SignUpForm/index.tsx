/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import MaskedInput from "react-text-mask";

import * as S from "./styles";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { CREATE_USER_MUTATION } from "@/GraphQL/Mutations/user";
import { useMutation } from "@apollo/client";
import { CREATE_PAYMENT } from "@/GraphQL/Mutations/payment";
import { toast } from "react-toastify";

interface FormValues {
  email: string;
  name: string;
}

const initialValues = {
  email: "",
  name: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email(),
  name: Yup.string().required("Este campo é obrigatório"),
});

type Props = {
  phone: string;
  cart?: {
    quantity: number;
    rifaId: string;
  };
};

type Auth = {
  phone: string;
};

export const SignUpForm = ({ phone, cart }: Props) => {
  const router = useRouter();

  const [createUser] = useMutation(CREATE_USER_MUTATION);
  const [isLoading, setIsLoading] = useState(false);
  const [createPayment] = useMutation(CREATE_PAYMENT);
  const { data: session } = useSession();

  useEffect(() => {
    const handlePayment = async () => {
      toast("Gerando Números... Aguarde!");
      try {
        const referralCode = JSON.parse(
          localStorage.getItem("@referral") as string
        );
        const response = await createPayment({
          variables: {
            rifaId: cart?.rifaId,
            quantity: cart?.quantity,
            referralCode: referralCode,
          },
          context: {
            session,
          },
        });
        sessionStorage.removeItem("@checkout-cart");
        router.push(
          `/checkout/${cart?.rifaId}?paymentId=${response?.data?.createPayment.id}`
        );
      } catch (e: any) {
        toast.error(`🚨 ${e.message}`);
      }
    };

    if (cart && session) {
      handlePayment();
    }
  }, [session]);

  const handleLogin = async ({ phone }: Auth) => {
    setIsLoading(true);
    toast("🚀 Conectando...");

    const result = await signIn<"credentials">("credentials", {
      phone: phone.replace(/\D/g, ""),
      redirect: false,
      callbackUrl: `${window.location.origin}${
        router.query?.callbackUrl || "/"
      }`,
    });

    if (result?.url && !cart) {
      return router.push(result.url);
    }
  };

  const handleSubmit = async ({ email, name }: FormValues) => {
    try {
      toast("🚧 Criando conta..");
      await createUser({
        variables: {
          user: {
            phone: phone.replace(/\D/g, ""),
            email,
            name,
          },
        },
      });
      return handleLogin({ phone });
    } catch (e: any) {
      toast.error(`🚨 ${e.message}`);
      return setIsLoading(false);
    }
  };

  const authentication = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const phoneNumberMask = [
    "(",
    /[1-9]/,
    /\d/,
    ")",
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];

  return (
    <S.Form onSubmit={authentication.handleSubmit} autoComplete="">
      <S.Label>Telefone</S.Label>
      <MaskedInput
        mask={phoneNumberMask}
        id="phone"
        name="phone"
        type="text"
        value={phone}
        disabled
      />
      <S.Label>Email</S.Label>
      <S.Input
        id="email"
        name="email"
        placeholder="Digite seu email"
        type="email"
        value={authentication.values.email}
        onChange={authentication.handleChange}
        onBlur={authentication.handleBlur}
      />
      <S.Label>Nome completo</S.Label>
      <S.Input
        id="name"
        name="name"
        placeholder="Digite seu nome completo"
        type="text"
        value={authentication.values.name}
        onChange={authentication.handleChange}
        onBlur={authentication.handleBlur}
      />

      <S.Button type="submit" disabled={!authentication.validateForm}>
        {!isLoading ? "Confirmar participação" : <S.Spinner />}
      </S.Button>
    </S.Form>
  );
};
