/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { AddMoreButton } from "../AddMoreButton";
import { IncrementInput } from "../IncrementInput";
import * as S from "./styles";

type RifaType = {
  id: string;
  numberPrice: number;
};

export const BuyNumbers = ({ id, numberPrice }: RifaType) => {
  const [value, setValue] = useState(10);
  const [price, setPrice] = useState("");

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
      <S.Price>Compre por apenas {price}</S.Price>
    </S.Container>
  );
};
