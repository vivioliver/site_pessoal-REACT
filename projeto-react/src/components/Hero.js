import React from 'react';
import '../App.css';
import perfil from '../assets/perfil (1).jpg'

function Hero() {
  return (
    <section className="hero">
      <div className="interface">
        <div className="flex">
          <div className="txt-topo-site">
            <h1>Viviane</h1>
            <p>Me chamo Viviane, tenho 18 anos, moro na cidade de Ielmo Marinho/RN desde pequena. Gosto muito de cozinhar sobremesas principalmente bolo, pudim, brigadeiro, pavê e mousse. Gosto muito de me aventurar com minha família pela nossa cidade, conhecendo novos lugares e visitando nossos familiares. Gosto de ir ao cinema, shopping, parques e lanchonetes. Meu maior sonho é que eu possa trabalhar no que gosto e consiga desfrutar de um futuro bem sucedido e estável junto da minha família.</p>
          </div>
          <div className="img-topo-site">
            <img src={perfil} alt="Perfil" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;