import { useRouter } from "next/router";
import * as S from "./styles";

type PurchasedProps = {
  name: string;
  status: string;
  numbers: number[];
  image: string;
  rifaId: string;
};

export const MyNumberCard = ({
  name,
  status,
  numbers,
  image,
  rifaId,
}: PurchasedProps) => {
  const router = useRouter();

  return (
    <S.Container onClick={() => router.push(`/sorteio/${rifaId}`)}>
      <S.ImageContainer url={image} />
      <S.Wrapper>
        <S.Name>{name}</S.Name>
        <S.NumberContainer>
          {numbers.map((number) => (
            <S.Number key={number}>
              {number.toString().padStart(5, "0")}
            </S.Number>
          ))}
        </S.NumberContainer>
        <S.Status status={status}>Em andamento!</S.Status>
      </S.Wrapper>
    </S.Container>
  );
};
