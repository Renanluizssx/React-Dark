import React, { useContext } from "react";
import "./Topo.css";
import Logo from "../../assets/logo.png";
import { UsarContext } from "../../context/Mode.js";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
function Topo() {
  const changeIcons = () => (mode === "modo-claro" ? moon : sun);
  const changeBackgroundButton = () =>
    mode === "modo-claro" ? "button-modo-claro" : "button-modo-escuro";
  const { mode, setmode } = useContext(UsarContext);

  const verificarEstado = () =>
    mode === "modo-claro" ? setmode("modo-escuro") : setmode("modo-claro");
  return (
    <div className={mode}>
      <header>
        <div>
          <img className="logo" src={Logo} alt="Logo" />
        </div>
        <button className={changeBackgroundButton()} onClick={verificarEstado}>
          <div>
            <img src={changeIcons()} className="botao" alt="moon" />
          </div>
        </button>
      </header>
    </div>
  );
}
export default Topo;
