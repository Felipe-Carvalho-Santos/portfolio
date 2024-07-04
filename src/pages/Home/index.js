import React from 'react';
import { Link } from 'react-router-dom';
import felipec from './img/felipec.png';
import trabalhando from './img/trabalhando.png';
import './home.css';

function Home() {
    return (
        <div className='home-container'>
            <div className='menu'>
                <Link to="/Sobre" className='name-menu'><ion-icon name="person-outline"></ion-icon>Sobre mim</Link>
                <Link to="/habilidades" className='name-menu'><ion-icon name="rocket-outline"></ion-icon>Habilidades</Link>
                <Link to="/skills" className='name-menu'><ion-icon name="bulb-outline"></ion-icon>Soft Skills</Link>
                <Link to="/projetos" className='name-menu'><ion-icon name="code-slash-outline"></ion-icon>Projetos</Link>
                <Link to="/certificados" className='name-menu'><ion-icon name="ribbon-outline"></ion-icon>Certificados</Link>
                <Link to="/contatos" className='name-menu'><ion-icon name="chatbox-ellipses-outline"></ion-icon>Contato</Link>
            </div>

            <div className='sub-menu'>
                <div className='logo'><img src={felipec} alt="Felipec"/></div>
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
                <img src={trabalhando} alt="trabalhando" className='img'/>
            </div>

        </div>
    );
}

export default Home;