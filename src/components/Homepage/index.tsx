import Header from "@/components/Header";
import { HighlightCard } from "@/components/HighlightCard";
import * as S from "./styles";
import { ImFire } from "react-icons/im";
import { GiveAwayCard } from "@/components/GiveawayCard";

const Homepage = () => {
  return (
    <S.Container>
      <Header />
      <S.Divider />
      <S.Content>
        <S.Title>
          <ImFire /> Destaque <ImFire />
        </S.Title>
        <HighlightCard />
        <GiveAwayCard />
        <GiveAwayCard />
        <GiveAwayCard />
      </S.Content>
    </S.Container>
  );
};

export default Homepage;
