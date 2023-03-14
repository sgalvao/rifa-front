export type LoadRifa = {
  id: string;
  name: string;
  participants: string;
  price: number;
  status: string;
  winnerNumber: number;
  image: string;
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
