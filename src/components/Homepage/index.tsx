import Header from "@/components/Header";
import { HighlightCard } from "@/components/HighlightCard";
import * as S from "./styles";
import { ImFire } from "react-icons/im";
import { GiveAwayCard } from "@/components/GiveawayCard";
import { Base } from "@/templates/Base";
import { LoadRifas, MenuType } from "@/types/api";
import { useRouter } from "next/router";
import { MenuContext } from "@/context/MenuProvider";
import { useEffect, useContext } from "react";

const Homepage = ({ loadRifas }: LoadRifas) => {
  const rifaList = loadRifas.slice(0);
  const router = useRouter();
  const { handleSet } = useContext(MenuContext);

  useEffect(() => {
    handleSet(MenuType.home);
  });

  return (
    <Base>
      <S.Divider />
      <S.Content>
        <S.Title>
          <ImFire /> Destaque <ImFire />
        </S.Title>
        {loadRifas.length && (
          <HighlightCard
            {...loadRifas[0]}
            onClick={() => router.push(`/sorteio/${loadRifas[0].id}`)}
          />
        )}
        <S.Wrapper>
          {rifaList &&
            rifaList.map((item) => <GiveAwayCard {...item} key={item.id} />)}
        </S.Wrapper>
      </S.Content>
    </Base>
  );
};

export default Homepage;
