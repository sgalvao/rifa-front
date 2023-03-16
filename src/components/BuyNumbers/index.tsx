/* eslint-disable react-hooks/exhaustive-deps */
import { usePayment } from "@/hooks/usePayment";
import { AddMoreButton } from "../AddMoreButton";
import { IncrementInput } from "../IncrementInput";
import * as S from "./styles";

type RifaType = {
  id: string;
  numberPrice: number;
};

export const BuyNumbers = ({ id, numberPrice }: RifaType) => {
  const {
    handleAddMore,
    handleConfirm,
    handleDecrement,
    handleIncrement,
    value,
    setValue,
    isLoading,
    price,
  } = usePayment({ id, numberPrice });
  console.log(isLoading);
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
      <S.Price onClick={handleConfirm} disabled={isLoading}>
        {!isLoading ? ` Participe por apenas ${price}` : <S.Spinner />}
      </S.Price>
    </S.Container>
  );
};
