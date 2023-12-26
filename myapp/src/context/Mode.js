import { createContext } from "react";
import { useState } from "react";

export const UsarContext = createContext();

export const Context = ({ children }) => {
  const [mode, setmode] = useState("modo-claro");

  const changeLetter = () => (mode === "modo-claro" ? "branco" : "preto");
  return (
    <UsarContext.Provider
      value={{
        mode,
        setmode,
        changeLetter,
      }}
    >
      {children}
    </UsarContext.Provider>
  );
};
