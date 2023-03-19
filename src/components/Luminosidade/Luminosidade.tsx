import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import bulb from '../../assets/bulb.png'
import lightgraph from '../../assets/lightgraph.png'
import './Luminosidade.css'

const Luminosidade = () => {
  return (
    <>
      <div className="main-app">
        <Sidebar />
        <div className="luminosidade">
          <div id="luminosidade-top">
            <p>Luminosidade</p>
          </div>
          <div id="luminosidade-left">
            <img id='lightbulb' src={bulb} alt="" />
            <p>Hoje a plantação teve uma médida de 10 horas de luz</p>
          </div>
          <div id="luminosidade-right">

          <img id='graphlight' src={lightgraph} alt="" />
          </div>

        </div>
      </div>
    </>
  )
}

export default Luminosidade