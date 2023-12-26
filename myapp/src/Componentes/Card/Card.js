import React from "react";
import "./Card.css";
import { UsarContext } from "../../context/Mode";
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
