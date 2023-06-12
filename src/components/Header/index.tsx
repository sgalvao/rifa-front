import * as S from "./styles";
import { useRouter } from "next/router";

import { signOut, useSession } from "next-auth/react";
import { Avatar, Dropdown, Text} from "@nextui-org/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Flex } from "@/styles/flex";
import Image from 'next/image'

const Header = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const { data: session } = useSession();

  return (
    <S.Container>
      <Flex
        align={"center"}
        justify={"center"}
        onClick={() => router.push("/")}
      >
        <Image
          src={"/img/logo.png"}
          alt="Logo maquina de prêmios"
          width={60}
          height={60}
          quality={60}
        />
        <Flex direction={"column"}>
          <Text
            h2
            css={{
              paddingLeft: "0.8rem",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "200",
              color: "#000",
            }}
          >
            Maquina de Prêmios
          </Text>
        </Flex>
      </Flex>
      <Dropdown placement="bottom-left">
        <Dropdown.Trigger>
          <Avatar
            bordered
            size="xl"
            as="button"
            color={"error"}
            icon={<RxHamburgerMenu size={26} color="#ffff" />}
          />
        </Dropdown.Trigger>
        <Dropdown.Menu color="primary" aria-label="User Actions">
          <Dropdown.Item color="primary">
            <Text h3 color="primary">
              {session?.user?.name
                ? `Olá, ${session?.user?.name
                    ?.split(" ")
                    .slice(0, 2)
                    .join(" ")}`
                : "Menu"}
            </Text>
          </Dropdown.Item>

          <Dropdown.Item withDivider color="warning">
            <Text h3 color="warning" onClick={() => router.push("/myNumbers")}>
              Meus Números
            </Text>
          </Dropdown.Item>
          <Dropdown.Item withDivider color="warning">
            <Text h3 color="warning" onClick={() => router.push("/about")}>
              Sobre nós
            </Text>
          </Dropdown.Item>
          <Dropdown.Item
            color="error"
            css={{
              textAlign: "center",
              justifySelf: "center",
            }}
            withDivider
          >
            <Text h3 color="error" onClick={handleSignOut}>
              Sair da conta
            </Text>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </S.Container>
  );
};

export default Header;
