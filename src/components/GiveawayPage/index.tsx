import { Base } from "@/templates/Base";
import { LoadRifa } from "@/types/api";
import { BuyNumbers } from "../BuyNumbers";
import { HighlightCard } from "../HighlightCard";
import { MyNumbersButton } from "../MyNumbersButton";
import * as S from "./styles";
import { format } from "date-fns";

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
        <S.DescriptionContainer>
          <S.DescriptionTitle>Descrição</S.DescriptionTitle>
          <S.Description>{data.loadRifa.description}</S.Description>
        </S.DescriptionContainer>
        <MyNumbersButton />
        {data.loadRifa.status === "OPEN" ? (
          <BuyNumbers id={data.loadRifa.id} numberPrice={data.loadRifa.price} />
        ) : (
          <S.FinishedContainer>
            <S.WinnerName>Ganhador: {data.loadRifa.winnerName}</S.WinnerName>
            <S.WinnerNumber>
              Numero sorteado: {data.loadRifa.winnerNumber}
            </S.WinnerNumber>
            <S.Date>
              Data do resultado:{" "}
              {format(new Date(data.loadRifa.finishedDate), "dd/MM/yyyy")}
            </S.Date>
          </S.FinishedContainer>
        )}
      </S.Container>
    </Base>
  );
};
