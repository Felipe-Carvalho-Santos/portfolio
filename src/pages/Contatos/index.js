import './contatos.css';
import React from 'react';
import { Link } from 'react-router-dom';



function Contatos() {
    return (
        <div className='contatos-container'>
            <h1 className='title-section'>Contatos</h1>
            <div className='box-contatos'>
                <div className='contatos'>
                    <ion-icon name="call-outline"></ion-icon><br/><br/>
                    <h3>Telefone:</h3><br/>
                    <p>+55 1999411-6759</p>
                </div>
                <div className='contatos'>
                    <ion-icon name="mail-outline"></ion-icon><br/><br/>
                    <h3>E-mail:</h3><br/>
                    <p>felipecarvalhosantos91@gmail.com</p>
                </div>
                <div className='contatos'>
                    <ion-icon name="location-outline"></ion-icon><br/><br/>
                    <h3>Localização:</h3><br/>
                    <p>Campinas - SP</p>
                </div>
            </div>
        </div>
    );
}

export default Contatos;