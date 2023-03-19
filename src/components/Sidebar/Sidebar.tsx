import React from "react";
import "./Sidebar.css";
import userimg from "../../assets/user.jpeg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div id="sidebar-user">
        <div className="user-img">
          <img src={userimg} alt="" />
        </div>
        <div className="user-info">
          <span>Junior Silva</span>
          <p>Smart Growth</p>
        </div>
      </div>
      <Link to="/">
        <div className="sb-item" id="sidebar-resumo sd-item">
          <p>
            <i className="bx bx-home-alt-2" /> Resumo
          </p>
        </div>
      </Link>

      <Link to="/ph">
        <div className="sb-item" id="sidebar-ph">
          <p>
            <i className="bx bxs-eyedropper" /> pH
          </p>
        </div>
      </Link>

      <Link to="/umidade">
        <div className="sb-item" id="sidebar-umidade">
          <p>
            <i className="bx bx-droplet" /> Umidade
          </p>
        </div>
      </Link>

      <Link to="/luminosidade">
        <div className="sb-item" id="sidebar-luminosidade">
          <p>
            <i className="bx bx-bulb" /> Luminosidade
          </p>
        </div>
      </Link>

      <Link to="/temperatura">
        <div className="sb-item" id="sidebar-temperatura">
          <p>
            <i className="bx bxs-thermometer" /> Temperatura
          </p>
        </div>
      </Link>
      <div className="sb-item" id="sidebar-sair">
        <p>
          <i className="bx bx-log-out" /> Sair
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
