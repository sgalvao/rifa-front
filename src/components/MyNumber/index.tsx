import { MyNumberCard } from "../MyNumberCard";
import { EmptyPage } from "../svg";
import * as S from "./styles";
export type Purchased = {
  name: string;
  status: string;
  numbers: number[];
  image: string;
  rifaId: string;
};

export type PurchasedListProps = {
  loadPurchasedNumbers: Purchased[];
};

export const MyNumber = (data: PurchasedListProps) => {
  return (
    <S.Container>
      <S.Title>Meus Números</S.Title>
      {data.loadPurchasedNumbers.length ? (
        data.loadPurchasedNumbers.map((item, index) => (
          <MyNumberCard
            key={index}
            image={item.image}
            name={item.name}
            numbers={item.numbers}
            rifaId={item.rifaId}
            status={item.status}
          />
        ))
      ) : (
        <>
          <EmptyPage />
          <S.Info>
            Você ainda não possui nenhum numero! Caso tenha comprado cotas
            aguarde a confirmação do pagamento em nosso sistema e confira
            novamente <strong>esta ação pode levar até 5 minutos!</strong>
          </S.Info>
        </>
      )}
    </S.Container>
  );
};
