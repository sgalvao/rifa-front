import dateHelper from "@/utils/date-helper";
import { useEffect, useState } from "react";
import { addMinutes } from "date-fns";
import { useCountdown } from "@/utils/useCountdown";
import * as S from "./styles";
import { useRouter } from "next/router";

type Props = {
  startTime: Date;
  handleEnd: () => void;
};

const Countdown = ({ startTime, handleEnd }: Props) => {
  const [minutes, seconds] = useCountdown(addMinutes(startTime, 10));

  const router = useRouter();

  if (minutes + seconds <= 0) {
    handleEnd();
    return (
      <S.Container>
        <S.Expired
          onClick={() => router.push(`/sorteio/${router.query.rifaId}`)}
        >
          Seu código PIX expirou clique aqui para gerar um novo!
        </S.Expired>
      </S.Container>
    );
  } else {
    return (
      <S.Container>
        <S.Counter isDanger={minutes < 4}>
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </S.Counter>
      </S.Container>
    );
  }
};

export default Countdown;
