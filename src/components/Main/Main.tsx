import React from "react";
import "./Main.css";
import Sidebar from "../Sidebar/Sidebar";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const Main = () => {
  return (
    <>
      <main className="main-app">
        <Sidebar />
        <div className="main">
          <div className="main-top_left">
            <p>Controle de pH</p>
            <CircularProgress value={30} size="150px" />
            <p>Nivel atual: 5 (Controlado)</p>
          </div>
          <div className="main-top_right">
            <p>Umidade</p>
            <CircularProgress value={60} size="150px" />
            <p>Nivel atual: 5 (Controlado)</p>
          </div>
          <div className="main-bottom_left">
            <p>Luminosidade</p>
            <CircularProgress value={90} size="150px" />
            <p>Nivel atual: 5 (Controlado)</p>
          </div>
          <div className="main-bottom_right">
            <p>Temperatura</p>
            <CircularProgress value={20} size="150px" />
            <p>Nivel atual: 5 (Controlado)</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
