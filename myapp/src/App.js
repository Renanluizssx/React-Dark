import sun from "./Assets/sun.png";
import moon from "./Assets/moon.png";
import React, { useState } from "react";
import Topo from "./Componentes/Topo";
import SecaoBanner from "./Componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "./Componentes/SecaoExperienciaTrabalho";
import Footer from "./Componentes/Rodape";
import "./App.css";

function App() {
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
    <div className="App">
      <Topo
        mode={mode}
        setmode={setmode}
        changeIcons={changeIcons()}
        changeBackgroundButton={changeBackgroundButton()}
      />
      <main>
        <SecaoBanner mode={mode} />
        <SecaoExperienciaTrabalho
          mode={mode}
          changeBackgroundSXT={changeBackgroundSXT()}
          changeLetter={changeLetter()}
        />
        <Footer mode={mode} changeColorFooter={changeColorFooter()} />
      </main>
    </div>
  );
}

export default App;
