import Header from "@/components/Header";
import * as S from "./styles";

type Props = {
  children: React.ReactNode;
};

export const Base = ({ children }: Props) => {
  return (
    <S.Container>
      <Header />
      <S.Content>{children}</S.Content>
      <S.Footer></S.Footer>
    </S.Container>
  );
};
