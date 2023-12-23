import React from "react";
import { useContext } from "react";
import { UsarContext } from "../../Context";
import Card from "../Card";
import "./secao-experiencia-trabalho.css";
function SecaoExperienciaTrabalho() {
  const { mode, changeBackgroundSXT, changeLetter } = useContext(UsarContext);
  return (
    <section className={`secao-experiencia-trabalho ${changeBackgroundSXT()}`}>
      <div className="content-text">
        <h2 className={changeLetter()}>Experiências de Trabalho</h2>
        <p>
          Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing Digital, nos emoenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.
        </p>
      </div>
      <div className={`container-cards ${changeBackgroundSXT()}`}>
        <Card mode={mode} changeLetter={changeLetter()} />
        <Card mode={mode} changeLetter={changeLetter()} />
        <Card mode={mode} changeLetter={changeLetter()} />
      </div>
    </section>
  );
}
export default SecaoExperienciaTrabalho;
