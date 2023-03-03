import * as S from "./styles";
import { useRouter } from "next/router";

type Props = {
  id: string;
  name: string;
  price: number;
  status: string;
  winnerNumber: number;
};

export const GiveAwayCard = ({
  name,
  id,
  price,
  status,
  winnerNumber,
}: Props) => {
  const router = useRouter();

  return (
    <S.Container onClick={() => router.push(`/sorteio/${id}`)}>
      <S.Image />
      <S.Wrapper>
        <S.Info>
          <S.Title>{name}</S.Title>
          <S.Price>
            Por Apenas{" "}
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </S.Price>
        </S.Info>
        <S.Status>{status === "OPEN" ? "Adquira já!" : "Finalizado!"}</S.Status>
      </S.Wrapper>
    </S.Container>
  );
};
