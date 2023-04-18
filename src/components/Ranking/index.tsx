import * as S from "./styles";

export const Ranking = () => {
  return (
    <S.Container>
      <S.Title></S.Title>

      <S.FirstPlace>
        <S.Name>Silvio Galvao</S.Name>
        <S.Count>352</S.Count>
      </S.FirstPlace>
      <S.SecondPlace>
        <S.Name>Jose goncalves</S.Name>
        <S.Count>200</S.Count>
      </S.SecondPlace>
      <S.ThirdPlace>
        <S.Name>Gerson Guimaraes</S.Name>
        <S.Count>115</S.Count>
      </S.ThirdPlace>
    </S.Container>
  );
};
