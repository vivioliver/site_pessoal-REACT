import React from 'react';
import '../App.css';

function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <h3>Minhas Habilidades</h3>
        <div className="skill-list">
            <div class="skill">
                <h4>Leitura e Escrita</h4>
                <p>Me considero muito boa na matéria de língua portuguesa principalmente em fazer redações, na ortografia, além de me dar bem ensinando outras pessoas o que eu aprendi sobre o conteúdo.</p>
                <div class="skill-progress">
                    <div class="progress-bar" style={{width: '90%' }}></div>
                </div>
            </div>
            <div class="skill">
                <h4>Criatividade</h4>
                <p>Me considero muito criativa principalmente quando me propõem a fazer algo, porque dessa maneira sempre tenho várias ideias que surpreendem a mim e aos outros.</p>
                <div class="skill-progress">
                    <div class="progress-bar" style={{width: '80%' }}></div>
                </div>
            </div>
            <div class="skill">
                <h4>Cozinha</h4>
                <p> Sou muito boa em cozinhar, principalmente sobremesas, (como já mencionei), e essa habilidade já vem das minhas procuras em aprender.</p>
                <div class="skill-progress">
                    <div class="progress-bar" style={{width: '75%' }}></div>
                </div>
            </div>
            <div class="skill">
                <h4>Tocar Instrumentos</h4>
                <p>Tenho facilidade de aprender a tocar instrumentos sempre que começo a estudar.</p>
                <div class="skill-progress">
                    <div class="progress-bar" style={{width: '85%' }}></div>
                </div>
            </div>
        </div>
    </div>
    </section>
  );
}

export default Skills;
