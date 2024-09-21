import React from 'react';
import '../App.css';
import Logonome from '../assets/Logonome.png'

function Footer() {
  return (
    <footer id="rodape">
      <div className="interface">
        <div className="line-footer">
          <div className="flex">
            <div className="logo-footer">
              <img src={Logonome} alt="Meu logotipo" />
            </div>
            <div className="btn-social">
              <a href="https://www.instagram.com/vivi_oliv03/">
                <button>Instagram</button>
              </a>
              <a href="https://github.com/vivioliver">
                <button>GitHub</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;