import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Temperatura.css'
import tempgraph from '../../assets/tempgraph.png'
import temptable from '../../assets/temptable.jpg'

const Temperatura = () => {
  return (
    <>
    <div className="main-app">
    <Sidebar/>
      <div className="temperatura">
      <div id="temperatura-top">
        <p>Temperatura</p>
      </div>
      <div id="temperatura-left">
      <img id='tempgraphl' src={tempgraph} alt="" />

      </div>
      <div id="temperatura-right">
      <img id='tempgraphr' src={temptable} alt="" />
      </div>
      </div>
    </div>

    
    </>
  )
}

export default Temperatura