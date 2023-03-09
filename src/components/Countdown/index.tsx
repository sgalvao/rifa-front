import { useEffect, useState } from "react";
import * as S from "./styles";
import { addMinutes } from "date-fns";
import dateHelper from "@/helpers/date";

interface TimeLeft {
  minutes: number;
  seconds: number;
}

type Props = {
  targetDate: string;
  handleEnd: () => void;
};

export const CountdownTimer = ({ targetDate, handleEnd }: Props) => {
  const date = new Date(targetDate).getTime();

  const expirationTime = addMinutes(date, 10);

  const inicialDate = dateHelper.IntervalFromated(expirationTime, new Date());

  const [currentdate, setCurrentDate] = useState(inicialDate);

  useEffect(() => {
    const timer = startTimer();
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  const startTimer = () => {
    return setInterval(() => {
      setCurrentDate(dateHelper.IntervalFromated(expirationTime, new Date()));
      if (new Date() >= expirationTime) {
        handleEnd();
      }
    }, 1000);
  };

  return (
    <>
      <S.ProgressContainer>
        <S.Timer>
          <S.TimerValue>{currentdate}</S.TimerValue>
        </S.Timer>
        <S.ProgressBar width={100} />
      </S.ProgressContainer>
    </>
  );
};
