import * as S from "./styles";

type ProgressProps = {
  percent: number;
};

export const ProgressiveBar = ({ percent }: ProgressProps) => {
  return (
    <S.Container>
      <S.Title>COTAS VENDIDAS </S.Title>
      <S.Bar>
        <S.Progress soldPercent={percent}>{percent}%</S.Progress>
      </S.Bar>
    </S.Container>
  );
};
