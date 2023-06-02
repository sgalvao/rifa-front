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
}: Props) => {
  return (
    <S.Container>
      <S.Button onClick={handleDecrement} disabled={value === 15}>
        <SlMinus size={24} />
      </S.Button>
      <S.Input>{value}</S.Input>
      <S.Button onClick={handleIncrement} disabled={value === 2500}>
        <BsPlusCircle size={24} />
      </S.Button>
    </S.Container>
  );
};
