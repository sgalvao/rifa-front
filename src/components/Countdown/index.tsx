import { useEffect, useState } from "react";
import * as S from "./styles";

interface TimeLeft {
  minutes: number;
  seconds: number;
}

type Props = {
  targetDate: string;
};

export const CountdownTimer = ({ targetDate }: Props) => {
  const calculateTimeLeft = (targetDate: string): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  }, [targetDate]);

  const minutes = timeLeft.minutes.toString().padStart(2, "0");
  const seconds = timeLeft.seconds.toString().padStart(2, "0");

  const totalSeconds =
    timeLeft.minutes * 60 + timeLeft.seconds <= 600
      ? timeLeft.minutes * 60 + timeLeft.seconds
      : 600;

  const percentage = (totalSeconds / 600) * 100;
  return (
    <>
      <S.ProgressBar width={percentage} />
      <S.Timer>
        <S.TimerValue>{minutes}</S.TimerValue>
        <S.TimerLabel>minutos</S.TimerLabel>
        <S.TimerValue>:</S.TimerValue>
        <S.TimerValue>{seconds}</S.TimerValue>
        <S.TimerLabel>segundos</S.TimerLabel>
      </S.Timer>
    </>
  );
};
