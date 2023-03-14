import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import MaskedInput from "react-text-mask";

import * as S from "./styles";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { CREATE_USER_MUTATION } from "@/GraphQL/Queries/user";
import { useMutation } from "@apollo/client";

interface FormValues {
  phone: string;
  email: string;
  name: string;
}

const initialValues = {
  phone: "",
  email: "",
  name: "",
};

const validationSchema = Yup.object().shape({
  phone: Yup.string().required("Este campo é obrigatório"),
  email: Yup.string().email(),
  name: Yup.string().required("Este campo é obrigatório"),
});

type Props = {
  phone: string;
};

export const SignUpForm = ({ phone }: Props) => {
  const router = useRouter();

  const [createUser] = useMutation(CREATE_USER_MUTATION);
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async ({ phone }: Props) => {
    setIsLoading(true);

    const result = await signIn<"credentials">("credentials", {
      phone: phone.replace(/\D/g, ""),
      redirect: false,
      callbackUrl: `${window.location.origin}${
        router.query?.callbackUrl || "/"
      }`,
    });

    if (result?.url) {
      setIsLoading(false);

      return router.push(result.url);
    }
  };

  const handleSubmit = async ({ phone, email, name }: FormValues) => {
    const user = await createUser({
      variables: {
        user: {
          phone,
          email,
          name,
        },
      },
    });

    if (user.errors) {
      return;
    }

    return handleLogin({ phone });
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
      <S.Label>
        Email <p>(opcional)</p>
      </S.Label>
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
