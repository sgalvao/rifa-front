import * as S from "./styles";

export const HighlightCard = () => {
  return (
    <S.Container>
      <S.RifaImage></S.RifaImage>
      <S.Wrapper>
        <S.Name>Ação relâmpago PIX R$2.000,00</S.Name>
        <S.Price>Por apenas R$0,49</S.Price>
      </S.Wrapper>
      <S.Status>Aberto</S.Status>
    </S.Container>
  );
};
