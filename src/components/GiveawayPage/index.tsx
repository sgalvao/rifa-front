import { LoadRanking, LoadRifa } from "@/types/api";
import { BuyNumbers } from "../BuyNumbers";
import * as S from "./styles";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { FaqCard } from "../FaqCard";
import { Ranking } from "@/components/Ranking";
import { useEffect, useState } from "react";
import { Badge, Card, Image, Row, Text } from "@nextui-org/react";
import { Flex } from "@/styles/flex";

type Props = {
  loadRifa: LoadRifa;
  loadRanking: LoadRanking;
};

export const GiveawayPage = (data: Props) => {
  const [showMore, setShowMore] = useState(false);

  const description = data.loadRifa.description.replace(/\\n/g, "<br>");

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
    <Flex direction={"column"}>
      <Card>
        <Card.Body>
          <Card.Image
            src={data.loadRifa.image}
            objectFit="cover"
            width="100%"
            alt={data.loadRifa.name}
            css={{ borderRadius: "1.2rem" }}
          />
        </Card.Body>
        <Card.Footer css={{ justifyItems: "center" }}>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text h2>{data.loadRifa.name}</Text>
            <Badge color={"success"} size={"xl"}>
              {data.loadRifa.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Badge>
          </Row>
        </Card.Footer>
      </Card>

      {/* <Flex justify={"between"} align={"center"} css={{ padding: "1.6rem" }}>
        <Text
          h2
          css={{ fontFamily: "Poppins, sans-serif", fontSize: "1.6rem" }}
        >
          {data.loadRifa.name}
        </Text>
        <Flex direction={"column"}>
          <Text
            h2
            css={{
              fontSize: "1.6rem",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "800",
              color: "white",
              backgroundColor: " #1b05cf",
              padding: "0.3rem 1rem",
              borderRadius: "1rem",
            }}
          >
            {" "}
            {data.loadRifa.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Text>
        </Flex>
      </Flex> */}

      {data.loadRifa.status === "OPEN" ? (
        <>
          <Card css={{ backgroundColor: "transparent" }}>
            <Card.Body>
              <Text h3 css={{ fontWeight: "bold" }}>
                Descrição
              </Text>
              <Text
                h4
                dangerouslySetInnerHTML={{
                  __html: showMore
                    ? description
                    : `${description.substring(0, 250)}...`,
                }}
              />
              <Text
                h4
                color="error"
                css={{ cursor: "pointer" }}
                onClick={() => setShowMore((current) => !current)}
              >
                {showMore ? "Mostrar menos" : "Ler mais"}
              </Text>
            </Card.Body>
          </Card>
          <BuyNumbers id={data.loadRifa.id} numberPrice={data.loadRifa.price} />
          <S.Info>
            Após a <strong>realização do pagamento</strong> verifique seus
            números na aba <strong>Meus números</strong> no menu do site!
          </S.Info>
          {data.loadRanking.length && (
            <Ranking ranking={data.loadRanking} prize={{ ...prizes }} />
          )}
          <Text
            h2
            css={{
              color: "#1b05cf",
              fontFamily: "Poppins, sans-serif",
              fontSize: "2rem",
              marginTop: "2rem",
            }}
          >
            PERGUNTAS FREQUENTES
          </Text>

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
    </Flex>
  );
};
