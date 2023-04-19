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

  const parsed = [
    {
      icon: "🥇",
      color: "#57d482",
      size: 100,
    },
    {
      icon: "🥈",
      color: "#57acd4",
      size: 95,
    },
    {
      icon: "🥉",
      color: "#9c2c1c",
      size: 90,
    },
  ];

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
          {ranking.length &&
            ranking.map((item, index) => (
              <S.PodiumCard
                key={index}
                color={parsed[index].color}
                size={parsed[index].size}
              >
                <S.Name>
                  {" "}
                  <strong>
                    {index + 1}°{parsed[index].icon}
                  </strong>{" "}
                  {item.name}
                </S.Name>
                <S.Count>{item.count} Bilhete(s)</S.Count>
              </S.PodiumCard>
            ))}
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
