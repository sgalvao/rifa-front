import * as S from "./styles";
import { HiGiftTop } from "react-icons/hi2";
import { FiMenu } from "react-icons/fi";
import { ModalMenu } from "@/components/ModalMenu";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const route = useRouter();

  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo onClick={() => route.push("/")}>
          <S.Image src={"/img/logo.png"} />
        </S.Logo>
        <S.Divider />
        <S.Title>Prêmios diários</S.Title>
      </S.Wrapper>
      <S.MenuButton onClick={handleOpen}>
        <FiMenu size={28} color={"#F3F4ED"} />
      </S.MenuButton>
      <ModalMenu open={open} setClose={() => setOpen(false)} />
    </S.Container>
  );
};

export default Header;
