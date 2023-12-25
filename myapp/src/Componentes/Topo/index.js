import React, { useContext } from "react";
import "./topo.css";
import Logo from "../../Assets/logo.png";
import { UsarContext } from "../../Context";
import sun from "../../Assets/sun.png";
import moon from "../../Assets/moon.png";
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
