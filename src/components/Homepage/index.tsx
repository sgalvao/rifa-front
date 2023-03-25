import Header from "@/components/Header";
import { HighlightCard } from "@/components/HighlightCard";
import * as S from "./styles";
import { ImFire } from "react-icons/im";
import { GiveAwayCard } from "@/components/GiveawayCard";
import { Base } from "@/templates/Base";
import { LoadRifas } from "@/types/api";
import { useRouter } from "next/router";

const Homepage = ({ loadRifas }: LoadRifas) => {
  const rifaList = loadRifas.slice(0);
  const router = useRouter();
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
        {rifaList &&
          rifaList.map((item) => <GiveAwayCard {...item} key={item.id} />)}
      </S.Content>
    </Base>
  );
};

export default Homepage;
