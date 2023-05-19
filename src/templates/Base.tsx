import Header from "@/components/Header";
import * as S from "./styles";
import { Flex } from "@/styles/flex";
import { Link, Image, Text } from "@nextui-org/react";

type Props = {
  children: React.ReactNode;
};

export const Base = ({ children }: Props) => {
  return (
    <S.Container>
      <Header />
      <S.Content>{children}</S.Content>
      <S.Footer>
        <Flex align={"center"} justify={"center"}>
          <Image
            width={110}
            height={110}
            src={"/img/mercadoPago.png"}
            alt="Default Image"
          />
          <Image
            width={110}
            height={110}
            src={"/img/pix-logo.svg"}
            alt="Default Image"
          />
        </Flex>
        <Flex direction={"column"} align={"center"}>
          <Text h4 color="primary">
            Todos os Direitos reservados
          </Text>
          <Text h4 color="primary">
            Copyright © Maquina de Prêmios | 42.087.388/0001-50
          </Text>
        </Flex>
      </S.Footer>
    </S.Container>
  );
};
