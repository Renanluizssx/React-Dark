import { createContext } from "react";
import { useState } from "react";
import sun from "../Assets/sun.png";
import moon from "../Assets/moon.png";
export const UsarContext = createContext();

export const Context = ({ children }) => {
  const [mode, setmode] = useState("modo-claro");
  const changeColorFooter = () =>
    mode === "modo-claro" ? "cor-claro" : "cor-escuro";
  const changeBackgroundButton = () =>
    mode === "modo-claro" ? "button-modo-claro" : "button-modo-escuro";
  const changeIcons = () => (mode === "modo-claro" ? moon : sun);
  const changeBackgroundSXT = () =>
    mode === "modo-claro" ? "secao-corClaroSXT" : "secao-corEscuroSXT";
  const changeLetter = () => (mode === "modo-claro" ? "branco" : "preto");
  return (
    <UsarContext.Provider
      value={{
        mode,
        setmode,
        changeColorFooter,
        changeBackgroundButton,
        changeIcons,
        changeBackgroundSXT,
        changeLetter,
      }}
    >
      {children}
    </UsarContext.Provider>
  );
};
