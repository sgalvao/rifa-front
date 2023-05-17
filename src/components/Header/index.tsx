import * as S from "./styles";
import { HiGiftTop } from "react-icons/hi2";
import { FiMenu } from "react-icons/fi";
import { ModalMenu } from "@/components/ModalMenu";
import { useState } from "react";
import { useRouter } from "next/router";

import { GrLogout } from "react-icons/gr";
import { signOut } from "next-auth/react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const route = useRouter();
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };
  return (
    <S.Container>
      <S.Content>
        <S.Logo onClick={() => route.push("/")}>
          <S.Image src={"/img/logo.png"} />
        </S.Logo>
        <S.Divider />
        <S.Wrapper>
          <S.Title>Maquina de Prêmios</S.Title>
          <S.Subtitle>Concorra a prêmios diários</S.Subtitle>
        </S.Wrapper>
      </S.Content>
      <S.SignOutContainer onClick={handleSignOut}>
        <GrLogout color="#ffffff" size={30} />
      </S.SignOutContainer>
    </S.Container>
  );
};

export default Header;
