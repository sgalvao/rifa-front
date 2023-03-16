import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import * as S from "./styles";

type Props = {
  children: React.ReactNode;
};

export const Base = ({ children }: Props) => {
  return (
    <S.Container>
      <Header />
      {children}
      <Footer />
    </S.Container>
  );
};
