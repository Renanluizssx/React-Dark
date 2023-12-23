import React from "react";
import "./card.css";
import { UsarContext } from "../../Context";
import { useContext } from "react";
function Card() {
  const { changeLetter } = useContext(UsarContext);
  return (
    <section className="Card">
      <p>FEVEREIRO 2019-2021</p>
      <h2 className={changeLetter()}>Digital Consulting</h2>
      <p>Arasaka Inc.</p>
      <p>
        Consultoria em estratégia digitais para todas as etapas do ciclo do
        projeto, desde a definição inicial até a execução
      </p>
    </section>
  );
}
export default Card;
