import { createContext } from "react";
import { useState } from "react";
import sun from "../Assets/sun.png";
import moon from "../Assets/moon.png";
export const UsarContext = createContext();

export const Context = ({ children }) => {
  const [mode, setmode] = useState("modo-claro");

  const changeIcons = () => (mode === "modo-claro" ? moon : sun);

  const changeLetter = () => (mode === "modo-claro" ? "branco" : "preto");
  return (
    <UsarContext.Provider
      value={{
        mode,
        setmode,
        changeIcons,
        changeLetter,
      }}
    >
      {children}
    </UsarContext.Provider>
  );
};
