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
