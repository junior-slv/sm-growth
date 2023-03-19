import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import umidade from "../../assets/umidade.png";
import umidadegraph from "../../assets/umidadegraph.png";
import "./Umidade.css";

const Umidade = () => {
  return (
    <>
      <div className="main-app">
        <Sidebar />
        <div className="umidade">
          <div id="umidade-top">
            <p>Umidade</p>
          </div>
          <div id="umidade-left">
            <div>
              <img src={umidade} alt="" />
            </div>
            <p>
              Recomendado:
              <br /> Geminação: 80% - 90%
              <br />
              Desenvolveu: 50% - 70%
            </p>
          </div>
          <div id="umidade-right">
            <p>Boa umidade. porém perto do mínimo recomendado!</p>
            <img id="umidadegraph" src={umidadegraph} alt="" />
            <p>
              Relatório do dia, manteve o ideal, porém,<br/>decaiu do recomendado,
              zona de perigo!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Umidade;
