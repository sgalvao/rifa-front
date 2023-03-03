import * as S from "./styles";

interface Props {
  value: number;
  popular?: boolean;
  onClick: () => void;
}

export const AddMoreButton = ({ value, popular, onClick }: Props) => {
  return (
    <S.Container>
      {popular && <S.PopularCard>Recomendado </S.PopularCard>}
      <S.AddMoreCard onClick={onClick} popular={popular}>
        +{value} Selecionar
      </S.AddMoreCard>
    </S.Container>
  );
};
