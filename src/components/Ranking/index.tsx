import * as S from "./styles";

type Ranking = {
  name: string;
  count: number;
};

type Prize = {
  place: number;
  prize: string;
};

type RankingProps = {
  ranking: Ranking[];
  prize: Prize[];
};

export const Ranking = () => {
  return (
    <S.Container>
      <S.Tabs>
        <S.TabButton>Top compradores</S.TabButton>
        <S.TabButton>Premiação 🏆</S.TabButton>
      </S.Tabs>
      <S.Wrapper>
        <S.FirstPlace>
          <S.Name>
            {" "}
            <strong>🥇</strong> Caparroz Cristiano de Souza
          </S.Name>
          <S.Count>352</S.Count>
        </S.FirstPlace>
        <S.SecondPlace>
          <S.Name>
            {" "}
            <strong>🥈</strong> Caparroz Cristiano de Souza
          </S.Name>
          <S.Count>200</S.Count>
        </S.SecondPlace>
        <S.ThirdPlace>
          <S.Name>
            <strong>🥉</strong> Caparroz Cristiano de Souza
          </S.Name>
          <S.Count>115</S.Count>
        </S.ThirdPlace>
      </S.Wrapper>
    </S.Container>
  );
};
