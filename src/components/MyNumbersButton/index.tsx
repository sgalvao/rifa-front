import { useRouter } from "next/router";
import * as S from "./styles";
import { HiOutlineTicket } from "react-icons/hi2";

export const MyNumbersButton = () => {
  const router = useRouter();

  return (
    <S.Container onClick={() => router.push("/myNumbers")}>
      <HiOutlineTicket size={32} color={"#f8f8f8"} />
      <S.Title> Consultar meus números</S.Title>
    </S.Container>
  );
};
