import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import * as S from "./styles";

type Props = {
  children: React.ReactNode;
  noFooter?: boolean;
};

export const Base = ({ children, noFooter }: Props) => {
  return (
    <S.Container>
      <Header />
      {children}
      {!noFooter && <Footer />}
    </S.Container>
  );
};
