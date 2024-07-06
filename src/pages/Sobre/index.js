import React from 'react';
import { Link } from 'react-router-dom';
import './sobre.css';
import felipefoto from './felipefoto.png';


function Sobre() {
    return (
        <div className='sobre-container'>
                <h1 className='title-section'>Sobre mim</h1>
                <div className='header-sobre'>
                    <h2 className='title-sobre'>Olá! eu sou o Felipe Carvalho 😁</h2>
                    <img src={felipefoto} alt="foto" className='foto' />
                </div>
                <p className='description-sobre'>Sou estudante de Análise e Desenvolvimento de Sistemas e tenho aplicado o conhecimento adquirido na graduação e em cursos complementares através de projetos práticos, desenvolvendo habilidades em <b>JavaScript, React, HTML e CSS.</b></p>
        </div>
    );
}

export default Sobre;
