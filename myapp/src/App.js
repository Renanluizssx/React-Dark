import React from "react";
import Topo from "./componentes/topo/Topo.js";
import SecaoBanner from "./componentes/secaoBanner/SecaoBanner.js";
import SecaoExperienciaTrabalho from "./componentes/secaoExperienciaTrabalho/SecaoExperienciaTrabalho.js";
import Rodape from "./componentes/rodape/Rodape.js";
import "./App.css";
import { Context } from "./context/Mode.js";
function App() {
  return (
    <div className="App">
      <Context>
        <Topo />
        <main>
          <SecaoBanner />
          <SecaoExperienciaTrabalho />
          <Rodape />
        </main>
      </Context>
    </div>
  );
}

export default App;
