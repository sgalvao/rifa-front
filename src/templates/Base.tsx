import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import * as S from "./styles";
import { FaqCard } from "@/components/FaqCard";

type Props = {
  children: React.ReactNode;
  noFooter?: boolean;
};

export const Base = ({ children, noFooter }: Props) => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        {children}
        {/* <FaqCard text="" question="Qual a data do sorteio?" /> */}
      </S.Content>
      {!noFooter && <Footer />}
    </S.Container>
  );
};
