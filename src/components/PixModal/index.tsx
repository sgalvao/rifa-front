import * as S from "./styles";
import QRCode from "react-qr-code";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";

type Props = {
  pixCode: string;
  isOpen: boolean;
  onClose: () => void;
};

export const PixModal = ({ pixCode, isOpen, onClose }: Props) => {
  return (
    <>
      <S.Container isOpen={isOpen}>
        <S.CloseButton onClick={onClose}>
          <AiOutlineClose size={20} />
        </S.CloseButton>
        <S.Title>Pagamento via Pix</S.Title>
        <S.Divider />
        <S.Description>
          Pix copia e cola: abra o aplicativo do seu banco pelo celular,
          selecione PIX e faça o pagamento. Ou escaneie o código com um celular.
        </S.Description>
        <S.PixContainer>
          <QRCode value={pixCode} size={180} />
        </S.PixContainer>
        <S.Wrapper>
          <S.Input value={pixCode} disabled />
          <S.CopyButton
            onClick={() => {
              navigator.clipboard.writeText(pixCode);
            }}
          >
            <FaRegCopy />
            Copiar
          </S.CopyButton>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
