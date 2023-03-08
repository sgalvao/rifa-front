/* eslint-disable jsx-a11y/alt-text */
import * as S from "./styles";
import pixLogo from "../../../public/img/pix-logo.svg";
import { FaReceipt } from "react-icons/fa";
import { useState } from "react";
import { PixModal } from "../PixModal";
import { CountdownTimer } from "../Countdown";

export type PaymentProps = {
  loadPaymentById: {
    copyPasteCode: string;
    id: string;
    numbers: number[];
    ownerId: string;
    quantity: number;
    totalValue: number;
    value: number;
    rifaId: string;
    transactionId: string;
    createdAt: string;
  };
  name: string;
};

const Checkout = (data: PaymentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    return setIsOpen(true);
  };

  return (
    <S.Container>
      <S.PaymentId>COMPRA #{data.loadPaymentById.transactionId}</S.PaymentId>
      <S.StatusCard>
        <FaReceipt size={28} color="#4f90ff" />
        Aguardando Pagamento...
      </S.StatusCard>
      <CountdownTimer targetDate={data.loadPaymentById.createdAt} />
      <S.Wrapper>
        <S.Title>Ação relâmpago R$2.000,00</S.Title>
        <S.Date>
          <strong>Data/compra:</strong> 06/03/23 ás 20h22
        </S.Date>
        <S.Status>
          <strong>Status:</strong> Aguardando pagamento
        </S.Status>
        <S.Quantity>
          <strong>Quantidade:</strong> {data.loadPaymentById.quantity} cotas
        </S.Quantity>
        <S.Numbers>
          <strong>Cotas: </strong>
          02597, 15630, 19861, 20062, 29705, 33861, 34955, 47280, 48822, 62986,
          68216, 74520, 78066, 82402, 86174, 88289, 89553, 92086, 94079, 98853
        </S.Numbers>
        <S.Value>
          <strong>Valor da cota:</strong>{" "}
          {data.loadPaymentById.value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </S.Value>
        <S.TotalValue>
          <strong>Total: </strong>
          {data.loadPaymentById.totalValue
            .toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
            .replace(" ", "")}
        </S.TotalValue>
      </S.Wrapper>
      <S.PixContainer onClick={handleOpen}>
        <S.PixButton>Pague agora com</S.PixButton>
        <S.PixCard url={pixLogo}></S.PixCard>
      </S.PixContainer>
      <PixModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        pixCode={data.loadPaymentById.copyPasteCode}
      />
    </S.Container>
  );
};

export default Checkout;
