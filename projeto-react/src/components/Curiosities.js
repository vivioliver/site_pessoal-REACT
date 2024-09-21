import React from 'react';
import '../App.css';
import acidente from '../assets/acidente (1).jpg'
import aulas from '../assets/aulas (1).jpg'
import TI from '../assets/TI (1).jpg'
import teclado from '../assets/teclado (1).jpg'
import escola from '../assets/escola (1).jpg'

function Curiosities() {
  return (
    <div>
      <h3 id="Curiosidades">Curiosidades</h3>
      <div className="card-container">
        <div className="card">
          <img src={acidente} alt="Curiosidade 1" />
          <h3>Curiosidade 1</h3>
          <p>Tive uma queimadura grave quando era pequena</p>
        </div>
        <div className="card">
          <img src={aulas} alt="Curiosidade 2" />
          <h3>Curiosidade 2</h3>
          <p>Dava aulas de reforço para crianças</p>
        </div>
        <div className="card">
          <img src={TI} alt="Curiosidade 3" />
          <h3>Curiosidade 3</h3>
          <p>Sou bolsista da TI</p>
        </div>
        <div className="card">
          <img src={teclado} alt="Curiosidade 4" />
          <h3>Curiosidade 4</h3>
          <p>Sei tocar teclado</p>
        </div>
        <div className="card">
          <img src={escola} alt="Curiosidade 5" />
          <h3>Curiosidade 5</h3>
          <p>Me colocaram numa turma a frente do que eu deveria estar na escola</p>
        </div>
      </div>
    </div>
  );
}

export default Curiosities;
