/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import * as S from "./styles";
import pixLogo from "../../../public/img/pix-logo.svg";
import { FaReceipt, FaTelegramPlane } from "react-icons/fa";
import { useEffect, useState } from "react";
import { PixModal } from "../PixModal";
import { format } from "date-fns";
import Countdown from "../Countdown";
import { BsWhatsapp } from "react-icons/bs";
import { useQuery } from "@apollo/client";
import { VERIFY_STATUS } from "@/GraphQL/Queries/payment";
import { useRouter } from "next/router";
import { Button, Text } from "@nextui-org/react";

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
    status: string;
  };
  name: string;
};

const Checkout = (data: PaymentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const router = useRouter();
  const [polling, setPolling] = useState(true);
  const {
    data: res,
    error,
    startPolling,
    stopPolling,
  } = useQuery(VERIFY_STATUS, {
    fetchPolicy: "cache-and-network",
    variables: {
      paymentId: router.query.paymentId,
    },
  });

  const handleOpen = () => {
    return setIsOpen(true);
  };

  useEffect(() => {
    if (polling && !isExpired) {
      startPolling(1000);
    } else {
      stopPolling();
    }

    if (res?.verifyStatus) {
      console.log("entrei");
      setPolling(false);
    }
  }, [polling, res]);

  const handleExpire = () => {
    setIsExpired(true);
  };

  return (
    <S.Container>
      <S.PaymentId>COMPRA #{data.loadPaymentById.transactionId}</S.PaymentId>
      <S.Info>
        Você esta comprando{" "}
        <strong>{data.loadPaymentById.numbers.length} cotas</strong> no valor de{" "}
        <strong>
          {data.loadPaymentById.value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}{" "}
          cada
        </strong>{" "}
        totalizando o valor de{" "}
        <strong>
          {data.loadPaymentById.totalValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
        !
      </S.Info>
      {!res?.verifyStatus ? (
        <S.StatusCard>
          <FaReceipt size={28} color="#1b05cf" />
          Aguardando Pagamento...
          <Countdown
            startTime={new Date(data.loadPaymentById.createdAt)}
            handleEnd={handleExpire}
          />
        </S.StatusCard>
      ) : (
        <S.StatusCard isApproved={res.verifyStatus}>
          <FaReceipt size={28} color="#08cf05" />
          Pagamento Aprovado
          <Button
            size={"xl"}
            onClick={() => router.push("/myNumbers")}
            color={"success"}
            bordered
            css={{ fontSize: "1.4rem" }}
          >
            Conferir seus números
          </Button>
        </S.StatusCard>
      )}

      {!res?.verifyStatus ? (
        <S.Info>
          O código ficará <strong>indisponível</strong> para pagamento{" "}
          <strong>após 10 minutos</strong> e os números selecionados voltaram a
          ficar disponíveis para <strong>compra</strong>!
        </S.Info>
      ) : (
        <S.Info>
          Agradecemos sua participação, e desejamos uma boa sorte! 🍀🤞
        </S.Info>
      )}
      <S.Wrapper>
        <S.Title>{data.name}</S.Title>
        <S.Date>
          <strong>Data da compra:</strong>{" "}
          {format(new Date(data.loadPaymentById.createdAt), "dd/MM/yy HH:mm")}
        </S.Date>
        <S.Status>
          <strong>Status:</strong> Aguardando pagamento
        </S.Status>
        <S.Quantity>
          <strong>Quantidade:</strong> {data.loadPaymentById.quantity} cotas
        </S.Quantity>
        <S.Numbers>
          <strong>Cotas: </strong>
          {data.loadPaymentById.numbers
            .map((number) => ` ${number}`.padStart(5, "0"))
            .join(",")}
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
      {!isExpired && !res?.verifyStatus && (
        <S.PixContainer onClick={handleOpen}>
          <S.PixButton>Clique aqui para pagar com</S.PixButton>
          <S.PixCard url={pixLogo}></S.PixCard>
        </S.PixContainer>
      )}
      <PixModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        pixCode={data.loadPaymentById.copyPasteCode}
      />
      <S.Button
        href="https://chat.whatsapp.com/Her3zgMMhdgJcG7oTLyIn2"
        target="_blank"
        rel="noreferrer"
      >
        <BsWhatsapp size={22} /> Entrar no grupo
      </S.Button>
    </S.Container>
  );
};

export default Checkout;
