import React from "react";
import "./topo.css";
import Logo from "../../Assets/logo.png";
function Topo({ mode, setmode, changeIcons, changeBackgroundButton }) {
  const verificarEstado = () =>
    mode === "modo-claro" ? setmode("modo-escuro") : setmode("modo-claro");
  return (
    <div className={mode}>
      <header>
        <div>
          <img className="logo" src={Logo} alt="Logo" />
        </div>
        <button className={changeBackgroundButton} onClick={verificarEstado}>
          <div>
            <img src={changeIcons} className="botao" alt="moon" />
          </div>
        </button>
      </header>
    </div>
  );
}
export default Topo;
