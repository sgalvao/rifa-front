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
