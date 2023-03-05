import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import MaskedInput from "react-text-mask";

import * as S from "./styles";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

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
};

export const LoginForm = ({ setAccountError }: Props) => {
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async ({ phone }: FormValues) => {
    setIsLoading(true);

    console.log(phone.replace(/\D/g, ""));

    console.log("teste");

    const result = await signIn<"credentials">("credentials", {
      phone: phone.replace(/\D/g, ""),
      redirect: false,
    });

    if (result?.error) {
      setIsLoading(false);
      return setAccountError(true);
    }

    if (result?.url) {
      setIsLoading(false);

      return router.push(result.url);
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
