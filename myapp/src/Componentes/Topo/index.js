import React, { useContext } from "react";
import "./topo.css";
import Logo from "../../Assets/logo.png";
import { UsarContext } from "../../Context";

function Topo() {
  const changeBackgroundButton = () =>
    mode === "modo-claro" ? "button-modo-claro" : "button-modo-escuro";
  const { changeIcons, mode, setmode } = useContext(UsarContext);

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
