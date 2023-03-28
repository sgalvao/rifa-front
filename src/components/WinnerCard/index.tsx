import { WinnerProps } from "@/types/api";
import { format } from "date-fns";
import { useRouter } from "next/router";
import * as S from "./styles";

export const WinnerCard = ({
  createdAt,
  rifaId,
  rifaImage,
  rifaName,
  winnerId,
  winnerName,
  winnerNumber,
}: WinnerProps) => {
  const router = useRouter();

  return (
    <S.Container onClick={() => router.push(`sorteio/${rifaId}`)}>
      <S.Image url={rifaImage} />
      <S.Wrapper>
        <S.Rifa>{rifaName}</S.Rifa>
        <S.Name>{winnerName}</S.Name>
        <S.Number>
          Numero vencedor: <p>{winnerNumber}</p>
        </S.Number>
        <S.Date>
          Data do resultado: {format(new Date(createdAt), "dd/MM/yy")}
        </S.Date>
      </S.Wrapper>
    </S.Container>
  );
};
