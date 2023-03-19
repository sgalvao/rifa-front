import { WinnersProps } from "@/types/api";
import { WinnerCard } from "../WinnerCard";
import * as S from "./styles";

export const WinnersPage = (data: WinnersProps) => {
  console.log(data);

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
