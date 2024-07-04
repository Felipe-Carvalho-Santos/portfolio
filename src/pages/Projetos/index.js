import './projetos.css';
import coming from './img/coming.png';
import cronometro from './img/cronometro.png';
import biscoito from './img/biscoito.png';
import calculadorajs from './img/calculadorajs.png';
import jobfinder from './img/jobfinder.png';
import quizzprogramacao from './img/quizzprogramacao.png';
import React from 'react';
import { Link } from 'react-router-dom';



function Projetos() {
    return (
        <div className='projetos-container'>
             <div className='menu-projetos'>
                <Link to="/" className='name-menu-projetos'><ion-icon name="home-outline"></ion-icon>Home</Link>
                <Link to="/Sobre" className='name-menu-projetos'><ion-icon name="person-outline"></ion-icon>Sobre mim</Link>
                <Link to="/habilidades" className='name-menu-sobre'><ion-icon name="rocket-outline"></ion-icon>Habilidades</Link>
                <Link to="/skills" className='name-menu-projetos'><ion-icon name="bulb-outline"></ion-icon>Soft Skills</Link>
                <Link to="/certificados" className='name-menu-projetos'><ion-icon name="ribbon-outline"></ion-icon>Certificados</Link>
                <Link to="/contatos" className='name-menu-projetos'><ion-icon name="chatbox-ellipses-outline"></ion-icon>Contato</Link>
            </div>
            <h1 className='title-section'>Projetos</h1>
            <div className='container-projetos'>
                <div className='projeto'>
                    <div className='photo-projeto'><img src={cronometro} alt="coming" className='img-projeto' /></div>
                    <div className='info-projeto'>
                        <p className='title-projeto'>Cronomêtro</p>
                        <p className='description-projeto'>Feito com React,<br/>JavaScript,<br/> HTML,<br/> CSS<br/>🚀🏃🏻‍♂️</p>
                    </div>
                    <div className='icons-projetos'>
                        <nav>
                            <ul>
                                <li><a href='https://cronometro-delta-blue.vercel.app/' target='_blank'><ion-icon name="globe-outline" title="Site"></ion-icon>Site</a></li>
                                <li><a href='https://github.com/Felipe-Carvalho-Santos/cronometro' target='_blank'><ion-icon name="logo-github" title="Repositório"></ion-icon>Github</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className='projeto'>
                    <div className='photo-projeto'><img src={biscoito} alt="coming" className='img-projeto' /></div>
                    <div className='info-projeto'>
                        <p className='title-projeto'>Biscoito da Sorte</p>
                        <p className='description-projeto'>Feito com React,<br/>JavaScript,<br/> HTML,<br/> CSS<br/>🥠</p>
                    </div>
                    <div className='icons-projetos'>
                        <nav>
                            <ul>
                                <li><a href='https://biscoito-eight.vercel.app/' target='_blank'><ion-icon name="globe-outline" title="Site"></ion-icon>Site</a></li>
                                <li><a href='https://github.com/Felipe-Carvalho-Santos/biscoito' target='_blank'><ion-icon name="logo-github" title="Repositório"></ion-icon>Github</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className='projeto'>
                    <div className='photo-projeto'><img src={calculadorajs} alt="coming" className='img-projeto' /></div>
                    <div className='info-projeto'>
                        <p className='title-projeto'>Calculadora</p>
                        <p className='description-projeto'>Feito com:<br/>JavaScript,<br/> HTML,<br/> CSS<br/>🔢✖️</p>
                    </div>
                    <div className='icons-projetos'>
                        <nav>
                            <ul>
                                <li><a href='https://calculadora-js-rho-seven.vercel.app/' target='_blank'><ion-icon name="globe-outline" title="Site"></ion-icon>Site</a></li>
                                <li><a href='https://github.com/Felipe-Carvalho-Santos/calculadora-Javascript' target='_blank'><ion-icon name="logo-github" title="Repositório"></ion-icon>Github</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className='projeto'>
                    <div className='photo-projeto'><img src={quizzprogramacao} alt="coming" className='img-projeto' /></div>
                    <div className='info-projeto'>
                        <p className='title-projeto'>Quizz Programação</p>
                        <p className='description-projeto'>Feito com JavaScript,<br/>(Manipulação e eventos de DOM)<br/>HTML,<br/>CSS<br/>🤓</p>
                    </div>
                    <div className='icons-projetos'>
                        <nav>
                            <ul>
                                <li><a href='https://quizz-programacao-six.vercel.app/' target='_blank'><ion-icon name="globe-outline" title="Site"></ion-icon>Site</a></li>
                                <li><a href='https://github.com/Felipe-Carvalho-Santos/quizz-programacao' target='_blank'><ion-icon name="logo-github" title="Repositório"></ion-icon>Github</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className='projeto'>
                    <div className='photo-projeto'><img src={jobfinder} alt="coming" className='img-projeto' /></div>
                    <div className='info-projeto'>
                        <p className='title-projeto'>Job Finder</p>
                        <p className='description-projeto'>Feito com JavaScript,<br/>Express, Node.Js,<br/> Handlebars,<br/> HTML e CSS<br/>📢</p>
                    </div>
                    <div className='icons-projetos'>
                        <nav>
                            <ul>
                                <li><a href=''><ion-icon name="globe-outline" title="Site"></ion-icon>Site</a></li>
                                <li><a href='https://github.com/Felipe-Carvalho-Santos/jobfinder' target='_blank'><ion-icon name="logo-github" title="Repositório"></ion-icon>Github</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                                   
            </div>
        </div>
    );
}

export default Projetos;