import * as S from "./styles";

type Props = {
  id: string;
  name: string;
  price: number;
  status: string;
  winnerNumber: number;
  image: string;
  onClick?: () => void;
};

export const HighlightCard = ({
  name,
  price,
  status,
  image,
  onClick,
}: Props) => {
  return (
    <S.Container onClick={onClick}>
      <S.RifaImage src={image} width={"100%"} height={"26.4rem"} />
      <S.Wrapper>
        <S.Name>{name}</S.Name>
        <S.Price>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </S.Price>
      </S.Wrapper>
      <S.Status status={status}>
        {status === "OPEN" ? "Adquira já!" : "Finalizado!"}
      </S.Status>
    </S.Container>
  );
};
