import { useState, createContext } from "react";

type Props = {
  children: React.ReactNode;
};
export const CheckoutContext = createContext({
  quantity: 0,
  setQuantity: (num: number) => {},
  rifaId: "",
  setRifaId: (value: string) => {},
});

const CheckoutProvider = ({ children }: Props) => {
  const [quantity, setQuantity] = useState(0);
  const [rifaId, setRifaId] = useState("");
  return (
    <CheckoutContext.Provider
      value={{ quantity, setQuantity, rifaId, setRifaId }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
