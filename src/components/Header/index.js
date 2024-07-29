import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className='menu-sobre'>
                <Link to="/" className='name-menu-sobre animated-border'><ion-icon name="home-outline"></ion-icon>Home</Link>
                <Link to="/Sobre" className='name-menu-sobre animated-border'><ion-icon name="person-outline"></ion-icon>Sobre mim</Link>
                <Link to="/habilidades" className='name-menu-sobre animated-border'><ion-icon name="rocket-outline"></ion-icon>Habilidades</Link>
                <Link to="/skills" className='name-menu-sobre animated-border'><ion-icon name="bulb-outline"></ion-icon>Soft Skills</Link>
                <Link to="/projetos" className='name-menu-sobre animated-border'><ion-icon name="code-slash-outline"></ion-icon>Projetos</Link>
                <Link to="/certificados" className='name-menu-sobre animated-border'><ion-icon name="ribbon-outline"></ion-icon>Certificados</Link>
                <Link to="/contatos" className='name-menu-sobre animated-border'><ion-icon name="chatbox-ellipses-outline"></ion-icon>Contato</Link>
        </div>
    );
}

export default Header;