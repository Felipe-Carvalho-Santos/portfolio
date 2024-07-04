import React from 'react';
import { Link } from 'react-router-dom';
import './sobre.css';
import felipefoto from './felipefoto.png';


function Sobre() {
    return (
        <div className='sobre-container'>
             <div className='menu-sobre'>
                <Link to="/" className='name-menu-sobre'><ion-icon name="home-outline"></ion-icon>Home</Link>
                <Link to="/habilidades" className='name-menu-sobre'><ion-icon name="rocket-outline"></ion-icon>Habilidades</Link>
                <Link to="/skills" className='name-menu-sobre'><ion-icon name="bulb-outline"></ion-icon>Soft Skills</Link>
                <Link to="/projetos" className='name-menu-sobre'><ion-icon name="code-slash-outline"></ion-icon>Projetos</Link>
                <Link to="/certificados" className='name-menu-sobre'><ion-icon name="ribbon-outline"></ion-icon>Certificados</Link>
                <Link to="/contatos" className='name-menu-sobre'><ion-icon name="chatbox-ellipses-outline"></ion-icon>Contato</Link>
            </div>
                <h1 className='title-section'>Sobre mim</h1>
                <div className='header-sobre'>
                    <h2 className='title-sobre'>Olá! eu sou o Felipe Carvalho 😁</h2>
                    <img src={felipefoto} alt="foto" className='foto' />
                </div>
                <p className='description-sobre'>Sou estudante de Análise e Desenvolvimento de Sistemas e tenho aplicado o conhecimento adquirido na graduação e em cursos complementares através de projetos práticos, desenvolvendo habilidades em JavaScript, React, HTML e CSS.<br/><br/>
                Tenho um grande interesse em aprender mais sobre essas ferramentas e em desenvolver habilidades de back-end para me tornar um desenvolvedor Full-Stack completo.<br/><br/>
                </p>
        </div>
    );
}

export default Sobre;
