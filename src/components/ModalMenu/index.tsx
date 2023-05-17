import { HiGiftTop } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
import { GiClover } from "react-icons/gi";
import { SlTrophy } from "react-icons/sl";
import { BsFileEarmarkRuled } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

import * as S from "./styles";
import { useRouter } from "next/router";
import { FiHome } from "react-icons/fi";

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
          <S.Item onClick={() => router.push("/")}>
            <FiHome /> Voltar aos prêmios
          </S.Item>
          <S.Item onClick={() => router.push("/myNumbers")}>
            <GiClover /> Meus Números
          </S.Item>
          <S.Item onClick={() => router.push("/winners")}>
            <SlTrophy /> Ganhadores
          </S.Item>
          <S.Item onClick={() => router.push("/about")}>
            <BsFileEarmarkRuled /> Sobre as Ações
          </S.Item>

          <S.Item>
            <a
              href="https://t.me/sortediariapremios"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegramPlane /> Telegram
            </a>
          </S.Item>
        </S.OptionsList>
      </S.Container>
    </>
  );
};
