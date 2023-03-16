/* eslint-disable react-hooks/exhaustive-deps */
import { CheckoutContext } from "@/context/CheckoutProvider";
import { CREATE_PAYMENT } from "@/GraphQL/Mutations/payment";
import { useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

type RifaType = {
  id: string;
  numberPrice: number;
};

type PaymentType = {
  createPayment: {
    id: string;
  };
};

export const usePayment = ({ id, numberPrice }: RifaType) => {
  const [value, setValue] = useState(10);
  const [price, setPrice] = useState("");
  const [paymentData, setPaymentData] = useState<PaymentType>();
  const [isLoading, setIsLoading] = useState(false);

  const [createPayment, { error }] = useMutation(CREATE_PAYMENT, {
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
    setIsLoading(true);
    setRifaId(id);
    const values = {
      rifaId: id,
      quantity: value,
    };

    sessionStorage.setItem("@checkout-cart", JSON.stringify(values));

    if (session) {
      setQuantity(value);
      const response = await createPayment({
        variables: {
          rifaId: id,
          quantity: value,
        },
        context: {
          session,
        },
      });
      setIsLoading(false);
      return route.push(
        `/checkout/${id}?paymentId=${response?.data?.createPayment.id}`
      );
    }

    return route.push("/login");
  };

  return {
    handleAddMore,
    handleConfirm,
    handleDecrement,
    handleIncrement,
    value,
    setValue,
    isLoading,
    price,
  };
};
