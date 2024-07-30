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
            
            <div className='form-container'>
            <form
                action="https://formsubmit.co/felipecarvalhosantos91@gmail.com"
                method="POST"
                class="form"
                >
                    <input type="text" name="name" id="name" placeholder='Digite seu nome' required />

                    <input type="email" name="email" id="email" placeholder='Digite seu e-mail' required />

                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Digite sua mensagem' required></textarea>

                    <button type="submit">Enviar</button>

                    <input type="hidden" name="_subject" value="Novo Contato!" />
                    <input type="text" name="_honey" class="hidden-field"/>
                    <input type="hidden" name="_captcha" value="false"/>
            </form>
            </div>


        </div>
    );
}

export default Contatos;