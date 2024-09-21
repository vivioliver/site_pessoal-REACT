import React from 'react';

const projects = [
  { title: "AtemporalBrand", description: "O projeto consistiu em criar uma loja para realizar um projeto com a disciplina de Autoria Web e Banco de Dados. Criamos então uma loja de roupas fictícias (AtemporalBrand) que seria para atender os públicos feminino e masculino de todas as idades com um estilo de moda atemporal. ", tech: "Python, HTML, CSS, JavaScript", github: "https://github.com/jottav21/AtemporalBrand.git" },
  { title: "Jogo da memória", description: "Criação do jogo da menória para a disciplina de Programação para Internet.", tech: "JavaScript, HTML, CSS", github: "https://github.com/vivioliver/jogo_da_memoria.git" },
  { title: "Site do professor", description: "Criação do site sobre o professor Sylvester Stallone. Avaliação do 1° bimestre da matéria de autoria web.", tech: "HTML, CSS", github: "https://github.com/vivioliver/Site-do-professor-.git" }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h3>Portfólio</h3>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <p><strong>Tecnologias:</strong> {project.tech}</p>
            <a href={project.github}>Ver no GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
