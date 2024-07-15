import React from 'react';
import { Link } from 'react-router-dom';
import './habilidades.css';


function Habilidades() {
    return (
        <div className='habilidades-container'>
                <h1 className='title-section'>Habilidades</h1>
                <div className='box-habilidades'>
                    <div className='habilidades'>
                        <ion-icon name="logo-javascript" id="js"></ion-icon>
                        <ion-icon name="logo-react" id="react"></ion-icon>
                        <ion-icon name="logo-html5" id="html"></ion-icon>
                        <ion-icon name="logo-css3" id="css"></ion-icon>
                        <ion-icon name="logo-github" id="github"></ion-icon>
                    </div>
                    <div className='description-habilidades'>
                        <div className='name-habilidade'><p>JavaScript</p></div>
                        <div className='name-habilidade'><p>React</p></div>
                        <div className='name-habilidade'><p>HTML5</p></div>
                        <div className='name-habilidade'><p>CSS3</p></div>
                        <div className='name-habilidade'><p>Github</p></div>
                    </div>
                    <p className='text-habilidade'>
                        <p id='habilidades-complementares'>Habilidades complementares:</p><br/>
                        Adobe Photoshop<br/>
                        Microsoft Office<br/>
                        Inglês Básico (Cursando)<br/><br/>
                        Com estudos intensivos, meu objetivo principal é explorar novas ferramentas além do desenvolvimento front-end e ampliar meu espectro de conhecimentos na área de programação. 🚀</p>
                </div>
        </div>
    );
}

export default Habilidades;