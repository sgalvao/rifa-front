import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import * as S from "./styles";
import { Tutorial } from "@/components/Tutorial";

type Props = {
  children: React.ReactNode;
  noFooter?: boolean;
};

export const Base = ({ children, noFooter }: Props) => {
  return (
    <S.Container>
      <Header />
      <S.Content>{children}</S.Content>
      {/* <Tutorial /> */}
      {!noFooter && <Footer />}
    </S.Container>
  );
};
