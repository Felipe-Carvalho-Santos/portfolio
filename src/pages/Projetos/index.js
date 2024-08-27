import './projetos.css';
import cronometro from './img/cronometro.png';
import biscoito from './img/biscoito.png';
import calculadorajs from './img/calculadorajs.png';
import quizzprogramacao from './img/quizzprogramacao.png';
import netlipe from './img/netlipe.png';
import tarefas from './img/tarefas.png';
import sistemachamados from './img/sistemachamados.png';
import consultacep from './img/consultacep.png';
import React from 'react';
import { Link } from 'react-router-dom';



function Projetos() {
    return (
        <div className='projetos-container'>
            <h1 className='title-section'>Projetos</h1>
            <div className='container-projetos'>

            <div className='projeto'>
                    <div className='photo-projeto'><img src={consultacep} alt="Consulta Cep" className='img-projeto' /></div>
                    <div className='info-projeto'>
                        <p className='title-projeto'>Consulta CEP</p>
                        <p className='description-projeto'>Feito com JavaScript,<br/>utlizando AJAX/API.<br/> HTML,<br/> CSS<br/>📍</p>
                    </div>
                    <div className='icons-projetos'>
                        <nav>
                            <ul>
                                <li><a href='https://consultacep-gamma.vercel.app/' target='_blank'><ion-icon name="globe-outline" title="Site"></ion-icon>Site</a></li>
                                <li><a href='https://github.com/Felipe-Carvalho-Santos/consultacep' target='_blank'><ion-icon name="logo-github" title="Repositório"></ion-icon>Github</a></li>
                            </ul>
                        </nav>
                    </div>
            </div>            

            <div className='projeto'>
                    <div className='photo-projeto'><img src={sistemachamados} alt="Sistema de Chamados" className='img-projeto' /></div>
                    <div className='info-projeto'>
                        <p className='title-projeto'>Sitema de Chamados</p>
                        <p className='description-projeto'>Feito com JavaScript,<br/>React, Firebase,<br/> HTML,<br/> CSS<br/>👩🏽‍💻</p>
                    </div>
                    <div className='icons-projetos'>
                        <nav>
                            <ul>
                                <li><a href='https://sistema-chamados-tan.vercel.app/' target='_blank'><ion-icon name="globe-outline" title="Site"></ion-icon>Site</a></li>
                                <li><a href='https://github.com/Felipe-Carvalho-Santos/sistema-chamados' target='_blank'><ion-icon name="logo-github" title="Repositório"></ion-icon>Github</a></li>
                            </ul>
                        </nav>
                    </div>
            </div>        

            <div className='projeto'>
                    <div className='photo-projeto'><img src={tarefas} alt="Organizando tarefas" className='img-projeto' /></div>
                    <div className='info-projeto'>
                        <p className='title-projeto'>Organizando Tarefas</p>
                        <p className='description-projeto'>Feito com JavaScript,<br/>React, Firebase,<br/> HTML,<br/> CSS<br/>📝</p>
                    </div>
                    <div className='icons-projetos'>
                        <nav>
                            <ul>
                                <li><a href='https://organizando-tarefas.vercel.app/' target='_blank'><ion-icon name="globe-outline" title="Site"></ion-icon>Site</a></li>
                                <li><a href='https://github.com/Felipe-Carvalho-Santos/organizando-tarefas' target='_blank'><ion-icon name="logo-github" title="Repositório"></ion-icon>Github</a></li>
                            </ul>
                        </nav>
                    </div>
            </div>    

            <div className='projeto'>
                    <div className='photo-projeto'><img src={netlipe} alt="netlipe" className='img-projeto' /></div>
                    <div className='info-projeto'>
                        <p className='title-projeto'>Netlipe Filmes</p>
                        <p className='description-projeto'>Feito com JavaScript,<br/>React, Api,<br/> HTML,<br/> CSS<br/>🎥🎬</p>
                    </div>
                    <div className='icons-projetos'>
                        <nav>
                            <ul>
                                <li><a href='https://netlipe.vercel.app/' target='_blank'><ion-icon name="globe-outline" title="Site"></ion-icon>Site</a></li>
                                <li><a href='https://github.com/Felipe-Carvalho-Santos/netlipe' target='_blank'><ion-icon name="logo-github" title="Repositório"></ion-icon>Github</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className='projeto'>
                    <div className='photo-projeto'><img src={cronometro} alt="cronometo" className='img-projeto' /></div>
                    <div className='info-projeto'>
                        <p className='title-projeto'>Cronomêtro</p>
                        <p className='description-projeto'>Feito com JavaScript,<br/>React,<br/> HTML,<br/> CSS<br/>🚀🏃🏻‍♂️</p>
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
                    <div className='photo-projeto'><img src={biscoito} alt="biscoito" className='img-projeto' /></div>
                    <div className='info-projeto'>
                        <p className='title-projeto'>Biscoito da Sorte</p>
                        <p className='description-projeto'>Feito com JavaScript,<br/>React,<br/> HTML,<br/> CSS<br/>🥠</p>
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
                    <div className='photo-projeto'><img src={calculadorajs} alt="calculadora" className='img-projeto' /></div>
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
                    <div className='photo-projeto'><img src={quizzprogramacao} alt="quizz" className='img-projeto' /></div>
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
                                   
            </div>
        </div>
    );
}

export default Projetos;