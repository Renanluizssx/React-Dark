import React, { useState } from "react";
import Topo from "./Componentes/Topo";
import SecaoBanner from "./Componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "./Componentes/SecaoExperienciaTrabalho";
import Footer from "./Componentes/Rodape";
import "./App.css";
import { Context } from "./Context";
function App() {
  // const [mode, setmode] = useState("modo-claro");

  return (
    <div className="App">
      <Context>
        <Topo />
        <main>
          <SecaoBanner />
          <SecaoExperienciaTrabalho />
          <Footer />
        </main>
      </Context>
    </div>
  );
}

export default App;
