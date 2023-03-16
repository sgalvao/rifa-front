import { Base } from "@/templates/Base";
import { LoadRifa } from "@/types/api";
import { BuyNumbers } from "../BuyNumbers";
import { HighlightCard } from "../HighlightCard";
import { MyNumbersButton } from "../MyNumbersButton";
import * as S from "./styles";

type Props = {
  loadRifa: LoadRifa;
};

export const GiveawayPage = (data: Props) => {
  return (
    <Base>
      <S.Container>
        <HighlightCard
          id={data.loadRifa.id}
          name={data.loadRifa.name}
          price={data.loadRifa.price}
          status={data.loadRifa.status}
          winnerNumber={data.loadRifa.winnerNumber}
          image={data.loadRifa.image}
        />
        <MyNumbersButton />
        {data.loadRifa.status === "OPEN" ? (
          <BuyNumbers id={data.loadRifa.id} numberPrice={data.loadRifa.price} />
        ) : (
          <S.FinishedContainer>
            <S.WinnerName>Ganhador: </S.WinnerName>
            <S.WinnerNumber>
              Numero sorteado: {data.loadRifa.winnerNumber}
            </S.WinnerNumber>
            <S.Date>Data do resultado: 17/03/2023</S.Date>
          </S.FinishedContainer>
        )}
      </S.Container>
    </Base>
  );
};
