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
      <S.Image src={rifaImage} />
      <S.Wrapper>
        <S.Name>{winnerName}</S.Name>
        <S.Rifa>{rifaName}</S.Rifa>
        <S.Date>
          Data do resultado: {format(new Date(createdAt), "dd/MM/yy")}
        </S.Date>
        <S.Number>
          Cota: <p>{winnerNumber}</p>
        </S.Number>
      </S.Wrapper>
    </S.Container>
  );
};
