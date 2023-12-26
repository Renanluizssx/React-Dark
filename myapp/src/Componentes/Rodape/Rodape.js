import React from "react";
import "./Rodape.css";
import Logo from "../../assets/logo.png";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import LinkedIn from "../../assets/linkedin.png";
import Dribble from "../../assets/dribble.png";
import Behance from "../../assets/behance.png";
import GooglePlus from "../../assets/google-plus.png";
import { useContext } from "react";
import { UsarContext } from "../../context/Mode.js";
function Rodape() {
  const { mode } = useContext(UsarContext);
  const changeColorFooter = () =>
    mode === "modo-claro" ? "cor-claro" : "cor-escuro";
  return (
    <footer className={mode}>
      <img className="Logo" src={Logo} alt="Logo" />
      <p className={changeColorFooter()}>
        Ajudamos a criar uma personalidade digital construindo sua marca no
        ambiente online utilizando estratégias, ferramentas e tecnologias
        personalizadas.
      </p>
      <div>
        <img src={Facebook} alt="Facebook" />
        <img src={Twitter} alt="Twitter" />
        <img src={LinkedIn} alt="Linkedin" />
        <img src={Dribble} alt="dribble" />
        <img src={Behance} alt="Behance" />
        <img src={GooglePlus} alt="Google Plus" />
      </div>
      <p className={"copyright " + changeColorFooter()}>
        Copyright 2023 <span>Renan Luiz</span>
      </p>
    </footer>
  );
}

export default Rodape;
