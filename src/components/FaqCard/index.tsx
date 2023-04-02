import * as S from "./styles";

type FaqProps = {
  question: string;
  text: string;
};

export const FaqCard = ({ question, text }: FaqProps) => {
  return (
    <S.Container>
      <S.Title>{question}</S.Title>
    </S.Container>
  );
};
