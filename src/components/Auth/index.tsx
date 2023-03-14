import { CheckoutContext } from "@/context/CheckoutProvider";
import { Alert, AlertTitle } from "@mui/material";
import { useState, useContext } from "react";
import { LoginForm } from "../LoginForm";
import { SignUpForm } from "../SignUpForm";
import * as S from "./styles";

export const AuthForm = () => {
  const [invalidAccount, setInvalidAccount] = useState(false);
  const { rifaId, quantity } = useContext(CheckoutContext);
  const [phone, setPhone] = useState("");
  return (
    <S.Container>
      <S.Title>Finalizar Compra</S.Title>
      <Alert severity="info" color="success">
        Você está comprando {quantity} cotas. Caso Tenha Alguma dúvida você pode
        entrar em contato.
      </Alert>
      {!invalidAccount ? (
        <LoginForm setAccountError={setInvalidAccount} setPhone={setPhone} />
      ) : (
        <SignUpForm phone={phone} />
      )}
    </S.Container>
  );
};
