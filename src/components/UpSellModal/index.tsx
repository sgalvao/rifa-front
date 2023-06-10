import { Flex } from "@/styles/flex";
import { Badge, Button, Modal, Row, Text } from "@nextui-org/react";

type Props = {
  isOpen: boolean;
  setClose?: () => {};
  onClose?: () => {};
  onSubmit?: () => {};
};

const UpSellModal = ({ isOpen, onClose, onSubmit }: Props) => {
  return (
    <div>
      <Modal
        aria-labelledby="modal-title"
        open={isOpen}
        onClose={onClose}
        preventClose
      >
        <Modal.Header>
          <Flex direction={"column"} align={"center"}>
            <Text id="modal-title" size={22} color="error">
              PROMOÇÃO EXCLUSIVA
            </Text>
            <Text size={"$2xl"} color={"warning"}>
              Valido somente agora
            </Text>
            <Text size={"$2xl"} color="error">
              Ganhe 20% de desconto comprando a partir de{" "}
              <strong>100 cotas</strong>
            </Text>
            <Flex>
              <Text size={18}>De </Text>
              <Badge
                color="error"
                size={"lg"}
                variant={"bordered"}
                css={{
                  textDecoration: "line-through",
                  margin: "0 6px",
                  fontSize: "$xl",
                }}
              >
                R$ 34,00
              </Badge>
              <Text size={18}>por apenas </Text>
              <Badge
                color="success"
                size={"lg"}
                variant={"bordered"}
                css={{ margin: "0 6px", fontSize: "$xl" }}
              >
                R$ 28,00
              </Badge>
            </Flex>
          </Flex>
        </Modal.Header>
        <Modal.Body>
          <Row justify="space-between"></Row>
        </Modal.Body>
        <Modal.Footer>
          <Flex align={"center"} justify={"around"} css={{ width: "100%" }}>
            <Button
              auto
              flat
              color="warning"
              onPress={onClose}
              size={"lg"}
              css={{ fontSize: "$lg" }}
            >
              Continuar sem desconto
            </Button>
            <Button
              auto
              onPress={onSubmit}
              color="success"
              size={"lg"}
              css={{ fontSize: "$xl" }}
            >
              Aproveitar desconto
            </Button>
          </Flex>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpSellModal;
