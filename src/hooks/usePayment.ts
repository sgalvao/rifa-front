/* eslint-disable react-hooks/exhaustive-deps */
import { CheckoutContext } from "@/context/CheckoutProvider";
import { CREATE_PAYMENT } from "@/GraphQL/Mutations/payment";
import { useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as fbq from "@/utils/facebook-pixel";

type RifaType = {
  id: string;
  numberPrice: number;
};

export const usePayment = ({ id, numberPrice }: RifaType) => {
  const [value, setValue] = useState(5);
  const [price, setPrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [createPayment] = useMutation(CREATE_PAYMENT);

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
    if (value > 5) {
      console.log("teste", value);
      return setValue((current: number) => current - 1);
    }
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
    const values = {
      rifaId: id,
      quantity: value,
      price: numberPrice,
    };
    sessionStorage.setItem("@checkout-cart", JSON.stringify(values));
    setRifaId(id);
    setIsLoading(true);

    if (!session) {
      return route.push("/login");
    }

    setQuantity(value);
    fbq.event("InitiateCheckout", {
      currency: "BRL",
      num_items: value,
      value: value * numberPrice,
    });

    try {
      toast("🚀 Gerando Números... Aguarde!");
      const response = await createPayment({
        variables: {
          rifaId: id,
          quantity: value,
        },
        context: {
          session,
        },
      });
      fbq.event("Purchase", {
        currency: "BRL",
        value: value * numberPrice,
      });
      sessionStorage.removeItem("@checkout-cart");

      return route.push(
        `/checkout/${id}?paymentId=${response?.data?.createPayment.id}`
      );
    } catch (e: any) {
      toast.error(`🚨 ${e.message}`);
    }
    setIsLoading(false);
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
