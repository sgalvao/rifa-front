import { HiGiftTop } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
import { BiHomeSmile, BiSupport } from "react-icons/bi";
import { GiClover } from "react-icons/gi";
import { SlTrophy } from "react-icons/sl";
import { BsFileEarmarkRuled } from "react-icons/bs";

import * as S from "./styles";
import { useRouter } from "next/router";

interface ModalProps {
  setClose: () => void;
  open: boolean;
}

export const ModalMenu = ({ setClose, open }: ModalProps) => {
  const router = useRouter();

  return (
    <>
      <S.Container isOpen={open}>
        <S.Wrapper>
          <S.Logo>
            <HiGiftTop size={28} />
            Menu
          </S.Logo>
          <S.CloseButton onClick={setClose}>
            <TfiClose />
          </S.CloseButton>
        </S.Wrapper>
        <S.OptionsList>
          <S.Item onClick={() => router.push("/myNumbers")}>
            <GiClover /> Meus Números
          </S.Item>
          <S.Item>
            <SlTrophy /> Ganhadores
          </S.Item>
          <S.Item>
            <BsFileEarmarkRuled /> Sobre as Ações
          </S.Item>
          <S.Item>
            <BiSupport /> Suporte
          </S.Item>
        </S.OptionsList>
      </S.Container>
    </>
  );
};
