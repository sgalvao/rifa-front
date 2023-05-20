import * as S from "./styles";

interface Props {
  value: number;
  popular?: boolean;
  onClick: () => void;
}

export const AddMoreButton = ({ value, popular, onClick }: Props) => {
  return (
    <S.AddMoreCard onClick={onClick} popular={popular}>
      {popular && <S.PopularCard>Recomendado</S.PopularCard>}+ {value}{" "}
      Selecionar
    </S.AddMoreCard>
  );
};
