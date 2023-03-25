import * as S from "./styles";
import QRCode from "react-qr-code";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
import { toast } from "react-toastify";

type Props = {
  pixCode: string;
  isOpen: boolean;
  onClose: () => void;
};

export const PixModal = ({ pixCode, isOpen, onClose }: Props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(pixCode);
    alert(
      "Codigo pix copiado! realize o pagamento através do aplicativo de seu banco"
    );
    toast.info("Código PIX copiado para area de transferência");
  };

  return (
    <>
      <S.Container isOpen={isOpen}>
        <S.CloseButton onClick={onClose}>
          <AiOutlineClose size={20} />
        </S.CloseButton>
        <S.Title>Pagamento via Pix</S.Title>
        <S.Divider />
        <S.Description>
          Pix copia e cola: abra o <strong>aplicativo do seu banco</strong> pelo
          celular, selecione <strong>PIX</strong> e faça o pagamento. Ou
          <strong> escaneie</strong> o código com um celular.
        </S.Description>
        <S.PixContainer>
          <QRCode value={pixCode} size={180} />
        </S.PixContainer>
        <S.Wrapper>
          <S.Input value={pixCode} disabled />
          <S.CopyButton onClick={handleCopy}>
            <FaRegCopy />
            Copiar
          </S.CopyButton>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
