import React from 'react';
import { Link } from 'react-router-dom';
import './skills.css';


function Skills() {
    return (
        <div className='skills-container'>
             <div className='menu-skills'>
                <Link to="/" className='name-menu-skills'><ion-icon name="home-outline"></ion-icon>Home</Link>
                <Link to="/Sobre" className='name-menu-skills'><ion-icon name="person-outline"></ion-icon>Sobre mim</Link>
                <Link to="/habilidades" className='name-menu'><ion-icon name="rocket-outline"></ion-icon>Habilidades</Link>
                <Link to="/projetos" className='name-menu-skills'><ion-icon name="code-slash-outline"></ion-icon>Projetos</Link>
                <Link to="/certificados" className='name-menu-skills'><ion-icon name="ribbon-outline"></ion-icon>Certificados</Link>
                <Link to="/contatos" className='name-menu-skills'><ion-icon name="chatbox-ellipses-outline"></ion-icon>Contato</Link>
            </div>
                <h1 className='title-section'>Soft Skills</h1>
                <div className='box-skills'>
                    <div className='box'>
                        <h3>Comunicação eficaz</h3>
                        <p>Capacidade de expressar ideias de forma clara e concisa, facilitando a colaboração com colegas de equipe e clientes.</p>
                    </div>
                    <div className='box'>
                        <h3>Trabalho em equipe</h3>
                        <p>Habilidade de trabalhar de forma colaborativa em equipe, contribuindo com habilidades e ideias dos colegas para alcançar objetivos comuns.</p>
                    </div>
                    <div className='box'>
                        <h3>Adaptabilidade</h3>
                        <p>Capacidade de se adaptar a novos desafios e ambientes de trabalho, lidando de forma eficaz com mudanças e imprevistos.</p>
                    </div>
                    <div className='box'>
                        <h3>Resolução de problemas</h3>
                        <p>Capacidade de identificar, analisar e resolver problemas de forma eficaz, buscando soluções criativas e inovadoras.</p>
                    </div>
                    <div className='box'>
                        <h3>Proatividade</h3>
                        <p>Iniciativa para buscar novas oportunidades, assumir responsabilidades e agir antecipadamente para evitar problemas.</p>
                    </div>
                    <div className='box'>
                        <h3>Resiliência</h3>
                        <p>Capacidade de enfrentar desafios e adversidades com determinação e otimismo, buscando aprender e crescer com as experiências.</p>
                    </div>
                    
                </div>
        </div>
    );
}

export default Skills;