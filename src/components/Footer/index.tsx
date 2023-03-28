import { MenuContext } from "@/context/MenuProvider";
import { MenuType } from "@/types/api";
import { useRouter } from "next/router";
import { BsFileEarmarkRuled } from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import { GiClover } from "react-icons/gi";
import { SlTrophy } from "react-icons/sl";
import * as S from "./styles";
import { useContext } from "react";

export const Footer = () => {
  const router = useRouter();

  const { menu } = useContext(MenuContext);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Item
          isActive={menu === MenuType.home}
          onClick={() => router.push("/")}
        >
          <FiHome size={20} /> Voltar ao Inicio
        </S.Item>
        <S.Item
          isActive={menu === MenuType.numbers}
          onClick={() => router.push("/myNumbers")}
        >
          <GiClover size={20} /> Meus Números
        </S.Item>
        <S.Item
          isActive={menu === MenuType.winners}
          onClick={() => router.push("/winners")}
        >
          <SlTrophy size={20} /> Ganhadores
        </S.Item>
        <S.Item
          isActive={menu === MenuType.about}
          onClick={() => router.push("/about")}
        >
          <BsFileEarmarkRuled size={20} /> Sobre as Ações
        </S.Item>
      </S.Wrapper>
    </S.Container>
  );
};
