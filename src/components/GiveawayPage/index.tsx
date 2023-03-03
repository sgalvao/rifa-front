import { Base } from "@/templates/Base";
import { LoadRifa } from "@/types/api";
import { BuyNumbers } from "../BuyNumbers";
import { HighlightCard } from "../HighlightCard";
import { ModalConfirmPayment } from "../ModalConfirmPayment";
import * as S from "./styles";

type Props = {
  loadRifa: LoadRifa;
};

export const GiveawayPage = (data: Props) => {
  return (
    <Base>
      <S.Container>
        <HighlightCard
          id={data.loadRifa.id}
          name={data.loadRifa.name}
          price={data.loadRifa.price}
          status={data.loadRifa.status}
          winnerNumber={data.loadRifa.winnerNumber}
        />
        {data.loadRifa.status === "OPEN" && (
          <BuyNumbers id={data.loadRifa.id} numberPrice={data.loadRifa.price} />
        )}
      </S.Container>
      <ModalConfirmPayment open={true} onClose={() => {}} />
    </Base>
  );
};
