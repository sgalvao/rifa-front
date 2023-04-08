import { useState } from "react";
import * as S from "./styles";
import { RiArrowRightSLine } from "react-icons/ri";

type FaqProps = {
  question: string;
  text: string;
};

export const FaqCard = ({ question, text }: FaqProps) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((current) => !current);
  };

  return (
    <S.Container>
      <S.Content onClick={handleClick} isOpen={open}>
        <S.Title>{question}</S.Title>
        <RiArrowRightSLine size={23} />
      </S.Content>
      {open && (
        <S.ContentCard>
          <S.Text>{text}</S.Text>
        </S.ContentCard>
      )}
    </S.Container>
  );
};
