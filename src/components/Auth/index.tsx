import { useState, useEffect } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { LoginForm } from "../LoginForm";
import { SignUpForm } from "../SignUpForm";
import * as S from "./styles";

type ItemProps = {
  rifaId: string;
  quantity: number;
  price: number;
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
    <S.Content>
      <S.Container>
        <S.Title>{checkoutItem ? "Finalizar Pedido" : "Conectar-se"}</S.Title>

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
      {checkoutItem && (
        <S.Alert>
          <BsInfoCircle size={30} color={"#24B602"} /> Você está comprando{" "}
          {checkoutItem?.quantity} cotas. Caso Tenha Alguma dúvida você pode
          entrar em contato.
        </S.Alert>
      )}
    </S.Content>
  );
};
