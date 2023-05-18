import { LoadRanking, LoadRifa } from "@/types/api";
import { BuyNumbers } from "../BuyNumbers";
import * as S from "./styles";
import { format } from "date-fns";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { useRouter } from "next/router";
import { FaqCard } from "../FaqCard";
import { Ranking } from "@/components/Ranking";
import { useEffect } from "react";
import { Collapse, Grid } from "@nextui-org/react";

type Props = {
  loadRifa: LoadRifa;
  loadRanking: LoadRanking;
};

export const GiveawayPage = (data: Props) => {
  const description = data.loadRifa.description.replace(/\\n/g, "<br>");

  const handleScrollBottom = () => {
    const section = document.querySelector("#buy-numbers");
    section?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const prizes = {
    firstPrize: data.loadRifa.firstPrize,
    secondPrize: data.loadRifa.secondPrize,
    thirdPrize: data.loadRifa.thirdPrize,
  };

  const router = useRouter();

  useEffect(() => {
    const { referralCode } = router.query;

    if (referralCode) {
      localStorage.setItem("@referral", JSON.stringify(referralCode));
    }
  }, [router.query]);

  return (
    <S.Container>
      <S.ImageContainer url={data.loadRifa.image}>
        <S.ReturnButton onClick={() => router.push("/")}>
          <HiOutlineArrowLeft size={25} color={"#fff"} />{" "}
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
      <S.Info>
        Após a <strong>realização do pagamento</strong> verifique seus números
        na aba <strong>Meus números</strong> no menu do site!
      </S.Info>

      {data.loadRifa.status === "OPEN" ? (
        <>
          <S.DescriptionContainer>
            <S.DescriptionTitle>Descrição</S.DescriptionTitle>
            <S.Description
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </S.DescriptionContainer>
          <BuyNumbers id={data.loadRifa.id} numberPrice={data.loadRifa.price} />
          {data.loadRanking.length && (
            <Ranking ranking={data.loadRanking} prize={{ ...prizes }} />
          )}
          <S.FaqTitle>PERGUNTAS FREQUENTES</S.FaqTitle>

          <FaqCard />
        </>
      ) : (
        <>
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
          {data.loadRifa.firstPrize && (
            <Ranking ranking={data.loadRanking} prize={{ ...prizes }} />
          )}
        </>
      )}
    </S.Container>
  );
};
