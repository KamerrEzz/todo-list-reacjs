import React from "react";
import withStorageListener from "./withStorageListener";
import './index.css'

function index({ show, showToggle }) {
  if(show) {
    return <div className="sincronized">
      <p className="sincronized-p">Hubo un cambio en otra ventana</p>
      <button className="sincronized-btn" onClick={() => showToggle(false)}>Actualizar</button>
    </div>;
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(index);

export default ChangeAlertWithStorageListener;
