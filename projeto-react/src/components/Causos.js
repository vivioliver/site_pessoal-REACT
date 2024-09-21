import React from 'react';
import '../App.css';
import causos from '../assets/causos (1).jpg'

function Causos() {
  return (
    <section className="sobre">
      <div className="interface">
        <div className="flex">
          <div className="img-sobre">
            <img src={causos} alt="Causos" />
          </div>
          <div className="txt-sobre">
            <h2 id="Causos">Causos</h2>
            <p>A alguns anos, um professor passou um trabalho em grupo. Eu e meu grupo combinamos de fazer o trabalho na minha casa à noite. Nos reunimos nesse dia e começamos a fazer, mas precisávamos de um piloto para escrever na cartolina e já que o professor morava perto fomos pedir um emprestado a ele. Nesse dia o cachorro da minha amiga seguiu ela até minha casa, e no caminho para a casa do professor vários cachorros começaram a brigar com o dela e todas nós saímos correndo desesperadas. No final conseguimos chegar em casa e achamos aquela situação bem engraçada.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Causos;