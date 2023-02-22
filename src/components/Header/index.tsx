import * as S from "./styles";
import { HiGiftTop } from "react-icons/hi2";
import { FiMenu } from "react-icons/fi";
import { ModalMenu } from "@/components/ModalMenu";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo>
          <HiGiftTop size={28} />
          Sorte do Dia
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
