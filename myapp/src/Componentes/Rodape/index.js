import React from "react";
import "./rodape.css";
import Logo from "../../Assets/logo.png";
import Facebook from "../../Assets/facebook.png";
import Twitter from "../../Assets/twitter.png";
import LinkedIn from "../../Assets/linkedin.png";
import Dribble from "../../Assets/dribble.png";
import Behance from "../../Assets/behance.png";
import GooglePlus from "../../Assets/google-plus.png";
import { useContext } from "react";
import { UsarContext } from "../../Context";
function Rodape() {
  const { mode, changeColorFooter } = useContext(UsarContext);
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
