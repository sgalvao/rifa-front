/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import MaskedInput from "react-text-mask";

import * as S from "./styles";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { CREATE_PAYMENT } from "@/GraphQL/Mutations/payment";
import { useMutation } from "@apollo/client";

interface FormValues {
  phone: string;
}

const initialValues = {
  phone: "",
};

const validationSchema = Yup.object().shape({
  phone: Yup.string().required("Este campo é obrigatório"),
});

type Props = {
  setAccountError: (value: boolean) => void;
  setPhone: (value: string) => void;
  cart?: {
    quantity: number;
    rifaId: string;
  };
};

export const LoginForm = ({ setAccountError, setPhone, cart }: Props) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const [createPayment] = useMutation(CREATE_PAYMENT);

  const { data: session } = useSession();

  useEffect(() => {
    const handlePayment = async () => {
      const response = await createPayment({
        variables: {
          rifaId: cart?.rifaId,
          quantity: cart?.quantity,
        },
        context: {
          session,
        },
      });
      sessionStorage.removeItem("@checkout-cart");
       router.push(
        `/checkout/${cart?.rifaId}?paymentId=${response?.data?.createPayment.id}`
      );
    };

    if (cart && session) {
      handlePayment();
    }
  }, [session]);

  const handleLogin = async ({ phone }: FormValues) => {
    setIsLoading(true);

    const result = await signIn<"credentials">("credentials", {
      phone: phone.replace(/\D/g, ""),
      redirect: false,
      callbackUrl: `${window.location.origin}${
        router.query?.callbackUrl || "/"
      }`,
    });

    if (result?.error) {
      setPhone(phone);
      return setAccountError(true);
    }

    if (result?.url && !cart) {
      return router.push(result?.url);
    }
  };

  const authentication = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: handleLogin,
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
        placeholder="(99) 9 9999-9999"
        type="text"
        value={authentication.values.phone}
        onChange={authentication.handleChange}
        onBlur={authentication.handleBlur}
      />

      <S.Button type="submit" disabled={!authentication.validateForm}>
        {!isLoading ? "Confirmar participação" : <S.Spinner />}
      </S.Button>
    </S.Form>
  );
};
