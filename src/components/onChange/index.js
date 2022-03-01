import React from "react";
import useStorageListener from "./useStorageListener";
import './index.css'

function changeAlert({ sincronizedToggle }) {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { storageChange: show, showToggle } = useStorageListener(sincronizedToggle);

  if(show) {
    return <div className="sincronized">
      <p className="sincronized-p">Hubo un cambio en otra ventana</p>
      <button className="sincronized-btn" onClick={() => showToggle(false)}>Actualizar</button>
    </div>;
  } else {
    return null;
  }
}


export default changeAlert;
