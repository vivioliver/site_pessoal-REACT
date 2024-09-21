import React from 'react';
import '../App.css';
import Logonome from '../assets/Logonome.png'

function Header() {
  return (
    <header>
      <div className="interface">
        <div className="logo">
          <a href="#">
            <img src={Logonome} alt="Logo do site" />
          </a>
        </div>
        <nav className="meu-desktop">
          <ul>
            <li><a href="#Curiosidades">Curiosidades</a></li>
            <li><a href="#Causos">Causos</a></li>
            <li><a href="#Habilidades">Habilidades</a></li>
            <li><a href="#Portfolio">Portfólio</a></li>
          </ul>
        </nav>
        <div className="btn-contato">
          <a href="#rodape">
            <button>Contato</button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;