import * as S from "./styles";

const About = () => {
  return (
    <S.Container>
      <S.Title>Sobre as Ações</S.Title>
      <S.Text>
        As ações são uma forma de premiar pessoas em que os participantes
        adquirem cotas numeradas para concorrer a um prêmio específico. Após a
        venda de todas as cotas, é realizado um sorteio pela{" "}
        <strong>Loteria Federal</strong> e o resultado é divulgado através de
        uma transmissão ao vivo no <strong>Instagram</strong> e divulgado no
        grupo do{" "}
        <a
          href="https://t.me/sortediariapremios"
          target="_blank"
          rel="noreferrer"
        >
          Telegram
        </a>{" "}
        da Maquina De Prêmios. A equipe responsável entrará em contato com o
        participante sorteado através do número de telefone cadastrado durante o
        processo de compra das cotas. Os participantes reconhecem e aceitam as
        <strong> regras</strong> estabelecidas pela organização da{" "}
        <strong>ação</strong>.
      </S.Text>
      <S.SubTitle>Regras das Ações</S.SubTitle>
      <S.RuleList>
        <S.ListItem>
          O sorteio da cota será realizado pela Loteria Federal após a venda de
          todas as cotas disponíveis e será divulgado em data e hora previamente
          anunciadas.
        </S.ListItem>
        <S.ListItem>
          As ações são abertas a todas as pessoas interessadas em participar,
          com idade igual ou superior a 18 anos.
        </S.ListItem>
        <S.ListItem>
          Cada participante pode adquirir uma ou mais cotas para concorrer ao
          prêmio oferecido.
        </S.ListItem>
        <S.ListItem>
          O valor de cada cota será definido previamente e será o mesmo para
          todos os participantes.
        </S.ListItem>
        <S.ListItem>
          As vendas das cotas serão realizadas através de um meio de pagamento
          online
        </S.ListItem>
        <S.ListItem>
          Após a realização do pedido de uma cota, o número correspondente
          ficará disponível para pagamento por um período máximo de 10 minutos.
          Após esse período, caso o pagamento não seja confirmado, o número será
          disponibilizado para venda novamente.
        </S.ListItem>
        <S.ListItem>
          O resultado será divulgado através de uma transmissão ao vivo no
          Instagram e também no grupo do Telegram criado especificamente para as
          ações
        </S.ListItem>
        <S.ListItem>
          A equipe responsável pela organização da ação entrará em contato com o
          participante sorteado através do número de telefone cadastrado durante
          o processo de compra das cotas
        </S.ListItem>
        <S.ListItem>
          Caso o prêmio não seja reclamado pelo participante sorteado dentro de
          um prazo máximo de 30 dias após a data do sorteio, o prêmio será
          considerado como perdido e a organização da ação poderá realizar um
          novo sorteio ou tomar outra decisão a seu critério.
        </S.ListItem>
      </S.RuleList>
    </S.Container>
  );
};

export default About;
