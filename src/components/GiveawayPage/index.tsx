import { LoadRifa } from "@/types/api";
import { BuyNumbers } from "../BuyNumbers";
import * as S from "./styles";
import { format } from "date-fns";
import { ProgressiveBar } from "../ProgressBar";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { useRouter } from "next/router";

type Props = {
  loadRifa: LoadRifa;
};

export const GiveawayPage = (data: Props) => {
  const description = data.loadRifa.description.replace(/\\n/g, "<br>");

  const handleScrollBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const router = useRouter();

  return (
    <S.Container>
      <S.ImageContainer url={data.loadRifa.image}>
        <S.ReturnButton onClick={() => router.push("/")}>
          <HiOutlineArrowLeft size={25} color={"#000"} />{" "}
        </S.ReturnButton>
        <S.Status status={data.loadRifa.status} onClick={handleScrollBottom}>
          {data.loadRifa.status === "OPEN" ? "Adquira já!" : "Finalizado!"}
        </S.Status>
      </S.ImageContainer>
      <S.RifaContent>
        <S.Title>{data.loadRifa.name}</S.Title>

        <S.Price>
          {" "}
          {data.loadRifa.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </S.Price>
      </S.RifaContent>
      {data.loadRifa.status === "OPEN" && <ProgressiveBar percent={71} />}
      <S.Info>
        Após a <strong>realização do pagamento</strong> verifique seus números
        na aba <strong>Meus números</strong> no menu do site!
      </S.Info>
      <S.DescriptionContainer>
        <S.DescriptionTitle>Descrição</S.DescriptionTitle>
        <S.Description
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </S.DescriptionContainer>

      {data.loadRifa.status === "OPEN" ? (
        <BuyNumbers id={data.loadRifa.id} numberPrice={data.loadRifa.price} />
      ) : (
        <S.FinishedContainer>
          <S.WinnerName>Ganhador: {data.loadRifa.winnerName}</S.WinnerName>
          <S.WinnerNumber>
            Numero sorteado: {data.loadRifa.winnerNumber}
          </S.WinnerNumber>
          <S.Date>
            Data do resultado:{" "}
            {format(new Date(data.loadRifa.finishedDate), "dd/MM/yyyy")}
          </S.Date>
        </S.FinishedContainer>
      )}
    </S.Container>
  );
};
