export type LoadRifa = {
  id: string;
  name: string;
  participants: string;
  price: number;
  status: string;
  winnerNumber: number;
  winnerName: string;
  image: string;
  finishedDate: string;
  description: string;
  soldNumbers: number[];
  firstPrize?: number;
  secondPrize?: number;
  thirdPrize?: number;
};

export type Ranking = {
  name: string;
  count: number;
};

export type LoadRanking = Ranking[];

export type RankingType = {
  firstPrize?: number;
  secondPrize?: number;
  thirdPrize?: number;
};

export type LoadRifas = {
  loadRifas: LoadRifa[];
};

export type UserProps = {
  token: string;
  phone: string;
  name: string;
  id: string;
  email: string;
};

export type WinnerProps = {
  rifaId: string;
  rifaImage: string;
  rifaName: string;
  winnerId: string;
  winnerName: string;
  winnerNumber: number;
  createdAt: Date;
};

export type WinnersProps = {
  loadWinners: WinnerProps[];
};

export enum StatusEnum {
  approved,
  expired,
  pending,
}

export const StatusType = {
  pending: {
    color: "#4f90ff",
    label: "Aguardando Pagamento...",
  },
  expired: {
    color: "#C70039",
    label: "Pagamento não foi confirmado!",
  },
  approved: {
    color: "#24B602",
    label: "✨Pagamento aprovado com sucesso!✨",
  },
};

export enum MenuEnum {
  home,
  about,
  numbers,
  winners,
}

export const MenuType = {
  home: "home",
  about: "about",
  numbers: "numbers",
  winners: "winners",
};
