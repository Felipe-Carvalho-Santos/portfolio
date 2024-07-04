import React from 'react';
import { Link } from 'react-router-dom';
import marioluigi from './img/marioluigi.png';
import './home.css';

function Home() {
    return (
        <div className='home-container'>

            <div className='sub-menu'>
                <div className="icons-home">
                <nav>
                    <ul id="icons-redes">
                        <li>
                            <a href="https://www.linkedin.com/in/felipe-carvalho-3993b9173" title="Ir para LinkedIn" target="_blank" rel="noopener noreferrer">
                                <i className="fi fi-brands-linkedin" id="linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Felipe-Carvalho-Santos" title="Ir para Github" target="_blank"><i
                                    class="fi fi-brands-github" id="github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/5519994116759" title="Enviar mensagem no Whatsapp" target="_blank"><i
                                    class="fi fi-brands-whatsapp" id="whatsapp"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>

            <div className='sub-menu2'>
                <img src={marioluigi} alt="trabalhando" className='img'/>
            </div>

        </div>
    );
}

export default Home;