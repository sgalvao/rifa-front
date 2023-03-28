import { MenuContext } from "@/context/MenuProvider";
import { MenuType, WinnersProps } from "@/types/api";
import { useContext, useEffect } from "react";
import { WinnerCard } from "../WinnerCard";
import * as S from "./styles";

export const WinnersPage = (data: WinnersProps) => {
  const { handleSet } = useContext(MenuContext);

  useEffect(() => {
    handleSet(MenuType.winners);
  });

  return (
    <S.Container>
      <S.Title>🏆 Ganhadores 🏆</S.Title>
      {data.loadWinners.length &&
        data.loadWinners.map((item, index) => (
          <WinnerCard key={index} {...item} />
        ))}
    </S.Container>
  );
};
