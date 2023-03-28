import { useState, createContext } from "react";

type Props = {
  children: React.ReactNode;
};
export const MenuContext = createContext({
  handleSet: (str: string) => {},
  menu: "",
});

const MenuProvider = ({ children }: Props) => {
  const [menu, setMenu] = useState("");

  const handleSet = (name: string) => {
    setMenu(name);
  };

  return (
    <MenuContext.Provider value={{ handleSet, menu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
