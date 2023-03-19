import { CheckoutContext } from "@/context/CheckoutProvider";
import { Alert, AlertTitle } from "@mui/material";
import { useSession } from "next-auth/react";
import { useState, useContext, useEffect } from "react";
import { LoginForm } from "../LoginForm";
import { SignUpForm } from "../SignUpForm";
import * as S from "./styles";

type ItemProps = {
  rifaId: string;
  quantity: number;
};

export const AuthForm = () => {
  const [invalidAccount, setInvalidAccount] = useState(false);
  const [phone, setPhone] = useState("");
  const [checkoutItem, setCheckoutItem] = useState<ItemProps>();

  useEffect(() => {
    const item = sessionStorage.getItem("@checkout-cart");
    if (item) {
      setCheckoutItem(JSON.parse(item));
    }
  }, []);

  return (
    <S.Container>
      <S.Title>{checkoutItem ? "Finalizar Pedido" : "Conectar-se"}</S.Title>
      {checkoutItem && (
        <Alert severity="info" color="success">
          <AlertTitle>
            Você está comprando {checkoutItem?.quantity} cotas. Caso Tenha
            Alguma dúvida você pode entrar em contato.
          </AlertTitle>
        </Alert>
      )}
      {!invalidAccount ? (
        <LoginForm
          setAccountError={setInvalidAccount}
          setPhone={setPhone}
          cart={checkoutItem}
        />
      ) : (
        <SignUpForm phone={phone} cart={checkoutItem} />
      )}
    </S.Container>
  );
};
