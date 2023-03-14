import * as S from "./styles";

type Props = {
  id: string;
  name: string;
  price: number;
  status: string;
  winnerNumber: number;
  image: string;
};

export const HighlightCard = ({
  id,
  name,
  price,
  status,
  winnerNumber,
  image,
}: Props) => {
  return (
    <S.Container>
      <S.RifaImage url={image} />
      <S.Wrapper>
        <S.Name>{name}</S.Name>
        <S.Price>
          Por apenas{" "}
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </S.Price>
      </S.Wrapper>
      <S.Status>{status === "OPEN" ? "Adquira já!" : "Finalizado!"}</S.Status>
    </S.Container>
  );
};
