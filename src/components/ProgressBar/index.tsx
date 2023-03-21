import * as S from "./styles";

type ProgressProps = {
  soldPercent: number;
};

export const ProgressiveBar = () => {
  const percent = 63;
  return (
    <S.Container>
      <S.Title>COTAS VENDIDAS </S.Title>
      <S.Bar>
        <S.Progress soldPercent={percent}>{percent}%</S.Progress>
      </S.Bar>
    </S.Container>
  );
};
