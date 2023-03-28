import * as S from "./styles";
import { HiGiftTop } from "react-icons/hi2";
import { FiMenu } from "react-icons/fi";
import { ModalMenu } from "@/components/ModalMenu";
import { useState } from "react";
import { useRouter } from "next/router";
const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const route = useRouter();

  return (
    <S.Container>
      <S.Logo onClick={() => route.push("/")}>
        <S.Image src={"/img/logo.png"} />
      </S.Logo>
      <S.Divider />
      <S.Wrapper>
        <S.Title>Maquina de Prêmios</S.Title>
        <S.Subtitle>Concorra a prêmios diários</S.Subtitle>
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;
