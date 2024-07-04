import './certificados.css';
import React from 'react';
import { Link } from 'react-router-dom';



function Certificados() {
    return (
        <div className='certificados-container'>
             <div className='menu-certificados'>
                <Link to="/" className='name-menu-certificados'><ion-icon name="home-outline"></ion-icon>Home</Link>
                <Link to="/Sobre" className='name-menu-certificados'><ion-icon name="person-outline"></ion-icon>Sobre mim</Link>
                <Link to="/habilidades" className='name-menu-sobre'><ion-icon name="rocket-outline"></ion-icon>Habilidades</Link>
                <Link to="/skills" className='name-menu-certificados'><ion-icon name="bulb-outline"></ion-icon>Soft Skills</Link>
                <Link to="/projetos" className='name-menu-certificados'><ion-icon name="code-slash-outline"></ion-icon>Projetos</Link>
                <Link to="/contatos" className='name-menu-certificados'><ion-icon name="chatbox-ellipses-outline"></ion-icon>Contato</Link>
            </div>
            <div className='box-certificados'>
            <div className='certificado'>
                    <div className='description-certificado'>
                        <h3><ion-icon name="ribbon-outline"></ion-icon>React JS</h3>
                        <p>Instituição: Udemy<br/>
                            Instrutor: Matheus Fraga<br/>
                            Ano de conclusão: 2024
                        </p>
                    </div>
                    <div className='btn-certificado'>
                        <a href='' className='button'>Certificado</a>
                    </div>

                </div>
                <div className='certificado'>
                    <div className='description-certificado'>
                        <h3><ion-icon name="ribbon-outline"></ion-icon>JavaScript (c/ Node.js)</h3>
                        <p>Instituição: Udemy<br/>
                            Instrutor: Matheus Battisti<br/>
                            Ano de conclusão: 2024
                        </p>
                    </div>
                    <div className='btn-certificado'>
                        <a href='https://www.udemy.com/certificate/UC-657874e4-c9d1-4497-a739-090bda702993/' target='_blank' className='button'>Certificado</a>
                    </div>

                </div>
                <div className='certificado'>
                    <div className='description-certificado'>
                        <h3><ion-icon name="ribbon-outline"></ion-icon>The Git & Github Bootcamp</h3>
                        <p>Instituição: Udemy<br/>
                            Instrutor: Colt Steele<br/>
                            Ano de conclusão: 2024
                        </p>
                    </div>
                    <div className='btn-certificado'>
                        <a href='https://www.udemy.com/certificate/UC-b4c94658-dd82-4c83-98dd-dfdb67326e98/' target='_blank' className='button'>Certificado</a>
                    </div>

                </div>
                <div className='certificado'>
                    <div className='description-certificado'>
                        <h3><ion-icon name="ribbon-outline"></ion-icon>Algoritmos e Lógica de Programação</h3>
                        <p>Instituição: Udemy<br/>
                            Instrutor: Nelio Alves<br/>
                            Ano de conclusão: 2024
                        </p>
                    </div>
                    <div className='btn-certificado'>
                        <a href='https://www.udemy.com/certificate/UC-0e531ae3-a60e-4b76-8bc4-72455eedd461/' target='_blank' className='button'>Certificado</a>
                    </div>

                </div>
                <div className='certificado'>
                    <div className='description-certificado'>
                        <h3><ion-icon name="ribbon-outline"></ion-icon>HTML5 e CSS3</h3>
                        <p>Instituição: Udemy<br/>
                            Instrutor: Matheus Battisti<br/>
                            Ano de conclusão: 2024
                        </p>
                    </div>
                    <div className='btn-certificado'>
                        <a href='https://www.udemy.com/certificate/UC-97dede63-9893-4644-8bf2-6b6553ccc729/' target='_blank' className='button'>Certificado</a>
                    </div>

                </div>
                
            </div>
        </div>
    );
}

export default Certificados;