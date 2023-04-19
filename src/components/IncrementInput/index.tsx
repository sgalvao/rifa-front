import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { SlMinus } from "react-icons/sl";
import * as S from "./styles";

interface Props {
  value: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
  setValue: (value: number) => void;
}

export const IncrementInput = ({
  value,
  handleDecrement,
  handleIncrement,
  setValue,
}: Props) => {
  return (
    <S.Container>
      <S.Button onClick={handleDecrement} disabled={value === 10}>
        <SlMinus size={24} />
      </S.Button>
      <S.Input>{value}</S.Input>
      <S.Button onClick={handleIncrement} disabled={value === 1000}>
        <BsPlusCircle size={24} />
      </S.Button>
    </S.Container>
  );
};
