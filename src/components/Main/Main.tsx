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
            <CircularProgress color="green" value={25} size="150px">  <CircularProgressLabel>7 pH</CircularProgressLabel> </CircularProgress>
            <p>(Cuidado)</p>
          </div>
          <div className="main-top_right">
            <p>Umidade</p>
            <CircularProgress color="blue" value={50} size="150px">  <CircularProgressLabel>70%</CircularProgressLabel> </CircularProgress>
            <p>(Controlado)</p>
          </div>
          <div className="main-bottom_left">
            <p>Luminosidade</p>
            <CircularProgress color="yellow" value={30} size="150px">  <CircularProgressLabel>30%</CircularProgressLabel> </CircularProgress>
            <p>(Controlado)</p>
          </div>
          <div className="main-bottom_right">
            <p>Temperatura</p>
            <CircularProgress color="red" value={32} size="150px">  <CircularProgressLabel>20C°</CircularProgressLabel> </CircularProgress>
            <p>(Controlado)</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
