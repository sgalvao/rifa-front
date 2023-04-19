import { useState } from "react";
import * as S from "./styles";

type Ranking = {
  name: string;
  count: number;
};

type Prize = {
  firstPrize?: number;
  secondPrize?: number;
  thirdPrize?: number;
};

type RankingProps = {
  ranking: Ranking[];
  prize?: Prize;
};

export const Ranking = ({ ranking, prize }: RankingProps) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const tab1 = activeTab === "tab1";
  const tab2 = activeTab === "tab2";
  console.log(ranking);

  return (
    <S.Container>
      <S.Tabs>
        <S.TabButton
          isActive={tab1}
          disabled={tab1}
          onClick={() => setActiveTab("tab1")}
        >
          🏅 Top compradores 🏅
        </S.TabButton>
        <S.TabButton
          isActive={tab2}
          disabled={tab2}
          onClick={() => setActiveTab("tab2")}
        >
          🏆 Premiação 🏆
        </S.TabButton>
      </S.Tabs>
      {activeTab === "tab1" ? (
        <S.Wrapper>
          <S.PodiumCard color="#57d482" size={100}>
            <S.Name>
              {" "}
              <strong>1°🥇</strong> {ranking[0].name}
            </S.Name>
            <S.Count>{ranking[0].count} Bilhete(s)</S.Count>
          </S.PodiumCard>
          <S.PodiumCard color="#57acd4" size={95}>
            <S.Name>
              {" "}
              <strong>2°🥈</strong> {ranking[1].name}
            </S.Name>
            <S.Count>{ranking[1].count} Bilhete(s)</S.Count>
          </S.PodiumCard>
          <S.PodiumCard color="#9c2c1c" size={90}>
            <S.Name>
              <strong>3°🥉</strong> {ranking[2].name}
            </S.Name>
            <S.Count>{ranking[2].count} Bilhete(s)</S.Count>
          </S.PodiumCard>
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <S.PrizeCard color="#57d482">
            <S.PrizePosition>1°🥇</S.PrizePosition>
            <S.PrizeValue>
              {prize?.firstPrize?.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </S.PrizeValue>
          </S.PrizeCard>{" "}
          <S.PrizeCard color="#57acd4">
            <S.PrizePosition>2°🥈</S.PrizePosition>
            <S.PrizeValue>
              {prize?.secondPrize?.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </S.PrizeValue>
          </S.PrizeCard>{" "}
          <S.PrizeCard color="#9c2c1c">
            <S.PrizePosition>3°🥉</S.PrizePosition>
            <S.PrizeValue>
              {prize?.thirdPrize?.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </S.PrizeValue>
          </S.PrizeCard>
        </S.Wrapper>
      )}
    </S.Container>
  );
};
