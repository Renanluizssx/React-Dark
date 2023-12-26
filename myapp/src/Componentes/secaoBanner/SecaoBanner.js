import React from "react";
import "./SecaoBanner.css";
import Banner from "../../assets/banner.png";
import { useContext } from "react";
import { UsarContext } from "../../context/Mode.js";
function SecaoBanner() {
  const { mode } = useContext(UsarContext);

  return (
    <div className={mode}>
      <section className="secao-banner">
        <div className="content-image">
          <img src={Banner} alt="Banner" />
        </div>
        <div className="content-technology">
          <div className="content">
            <p>BRANDING / UI / UX / TECNOLOGIA</p>
            <p>Agência de Branding</p>
            <p>e design digital</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecaoBanner;
