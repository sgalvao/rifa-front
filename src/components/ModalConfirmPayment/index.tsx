import { useSession } from "next-auth/react";
import { Login } from "../Login";
import * as S from "./styles";
import { Modal } from "antd";
import { useState } from "react";

type ModalProps = {
  onClose: () => void;
  open: boolean;
};

export const ModalConfirmPayment = ({ onClose, open }: ModalProps) => {
  const { data: session } = useSession();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
  };

  return (
    <>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Login />
      </Modal>
    </>
  );
};
