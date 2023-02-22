import * as S from "./styles";

export const GiveAwayCard = () => {
  return (
    <S.Container>
      <S.Image />
      <S.Wrapper>
        <S.Info>
          <S.Title>Ação Carro blindado</S.Title>
          <S.Price>Por Apenas R$1,98</S.Price>
        </S.Info>
        <S.Status>em aberto</S.Status>
      </S.Wrapper>
    </S.Container>
  );
};
