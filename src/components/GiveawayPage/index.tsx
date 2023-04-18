import { LoadRifa } from "@/types/api";
import { BuyNumbers } from "../BuyNumbers";
import * as S from "./styles";
import { format } from "date-fns";
import { ProgressiveBar } from "../ProgressBar";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { useRouter } from "next/router";
import { FaqCard } from "../FaqCard";
import { Ranking } from "@/components/Ranking";

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
      {data.loadRifa.status === "OPEN" && <ProgressiveBar percent={27} />}
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
          <Ranking />
          <S.Wrapper>
            <S.FaqTitle>PERGUNTAS FREQUENTES</S.FaqTitle>
            <FaqCard
              text={`A data do sorteio será definida após a venda de todas as cotas e sera INFORMADA previamente em todos os canais de divulgação inclusive aqui no site, todos nossos sorteios são realizados através da extração da Loteria Federal. Caso haja alguma dúvida entrar em contato com o suporte pelo Telegram`}
              question="Qual a data do sorteio?"
            />
            <FaqCard
              text="Nossa política de segurança e credibilidade é extremamente rígida, todos nossos sorteios são feitos através da Loteria Federal e divulgamos os resultados através de live na nossa pagina do Instagram e Telegram!! Acesse nossas redes sociais e se estiver com qualquer tipo de dúvida, entre em contato com nossa equipe pelo Telegram."
              question="O sorteio é confiável?"
            />
            <FaqCard
              text="Assim que for definido o resultado do sorteio nós entraremos em contato com o ganhador através dos dados fornecidos por ele na hora da compra da cota (EMAIL ou Whatsapp/Telegram) ou ligaremos para o número para informar o ganhador, mas você também poderá conferir aqui na pagina da Ação ou em nosso grupo do Telegram (link no menu)"
              question="Como saber se eu ganhei?"
            />
          </S.Wrapper>
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
          <Ranking />
        </>
      )}
    </S.Container>
  );
};
