/* eslint-disable react-hooks/exhaustive-deps */
import { CheckoutContext } from "@/context/CheckoutProvider";
import { CREATE_PAYMENT } from "@/GraphQL/Mutations/payment";
import { useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AddMoreButton } from "../AddMoreButton";
import { IncrementInput } from "../IncrementInput";
import * as S from "./styles";

type RifaType = {
  id: string;
  numberPrice: number;
};

type PaymentType = {
  createPayment: {
    id: string;
  };
};

export const BuyNumbers = ({ id, numberPrice }: RifaType) => {
  const [value, setValue] = useState(10);
  const [price, setPrice] = useState("");
  const [paymentData, setPaymentData] = useState<PaymentType>();

  const [createPayment, { loading, error }] = useMutation(CREATE_PAYMENT, {
    onCompleted: (data) => setPaymentData(data),
  });

  const { setRifaId, setQuantity } = useContext(CheckoutContext);
  useEffect(() => {
    const formatNumber = (num: number) => {
      const result = num * numberPrice;
      setPrice(
        result.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
      );
      return price;
    };
    formatNumber(value);
  }, [value]);

  const handleDecrement = () => {
    setValue((current: number) => current - 1);
  };

  const handleIncrement = () => {
    setValue((current) => current + 1);
  };

  const handleAddMore = (valueAdded: number) => {
    if (value + valueAdded >= 1000) {
      return setValue(1000);
    }

    setValue((current) => current + valueAdded);
  };

  const route = useRouter();
  const { data: session } = useSession();

  const handleConfirm = async () => {
    setQuantity(value);
    setRifaId(id);
    const values = {
      rifaId: id,
      quantity: value,
    };

    sessionStorage.setItem("@checkout-cart", JSON.stringify(values));

    if (session) {
      await createPayment({
        variables: {
          rifaId: id,
          quantity: value,
        },
        context: {
          session,
        },
      });
      if (paymentData) {
        return route.push(
          `/checkout/${id}?paymentId=${paymentData?.createPayment?.id}`
        );
      }
    }
  };

  return (
    <S.Container>
      <S.Grid>
        <AddMoreButton onClick={() => handleAddMore(5)} value={5} />
        <AddMoreButton onClick={() => handleAddMore(10)} value={10} popular />
        <AddMoreButton onClick={() => handleAddMore(50)} value={50} />
        <AddMoreButton onClick={() => handleAddMore(100)} value={100} />
      </S.Grid>
      <IncrementInput
        value={value}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        setValue={setValue}
      />
      <S.Price onClick={handleConfirm} disabled={loading}>
        Participe por apenas {price}
      </S.Price>
    </S.Container>
  );
};
