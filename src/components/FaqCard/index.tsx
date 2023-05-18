import { Collapse, Text, Grid } from "@nextui-org/react";

export const FaqCard = () => {
  return (
    <Collapse.Group>
      <Collapse title={"Qual a data do sorteio?"}>
        <Text h4>
          A data do sorteio será definida após a venda de todas as cotas e sera
          INFORMADA previamente em todos os canais de divulgação inclusive aqui
          no site, todos nossos sorteios são realizados através da extração da
          Loteria Federal. Caso haja alguma dúvida entrar em contato com o
          suporte pelo Telegram
        </Text>
      </Collapse>
      <Collapse title={"O sorteio é confiável?"}>
        <Text h4>
          Nossa política de segurança e credibilidade é extremamente rígida,
          todos nossos sorteios são feitos através da Loteria Federal e
          divulgamos os resultados através de live na nossa pagina do Instagram
          e Telegram!! Acesse nossas redes sociais e se estiver com qualquer
          tipo de dúvida, entre em contato com nossa equipe pelo Telegram.
        </Text>
      </Collapse>
      <Collapse title={"Como saber se eu ganhei?"}>
        <Text h4>
          Assim que for definido o resultado do sorteio nós entraremos em
          contato com o ganhador através dos dados fornecidos por ele na hora da
          compra da cota (EMAIL ou Whatsapp/Telegram) ou ligaremos para o número
          para informar o ganhador, mas você também poderá conferir aqui na
          pagina da Ação ou em nosso grupo do Telegram (link no menu)
        </Text>
      </Collapse>
    </Collapse.Group>
  );
};
