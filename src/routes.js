import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Footer from './components/Footer';
import Habilidades from './pages/Habilidades';
import Skills from './pages/Skills';
import Projetos from './pages/Projetos';
import Certificados from './pages/Certificados';
import Contatos from './pages/Contatos';

function RoutesApp(){
    return(
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element={ <Home/>}></Route>
            <Route path="/Sobre" element={ <Sobre/>}></Route>
            <Route path="/Habilidades" element={ <Habilidades/>}></Route>
            <Route path="/Skills" element={ <Skills/>}></Route>
            <Route path="/Projetos" element={ <Projetos/>}></Route>
            <Route path="/Certificados" element={ <Certificados/>}></Route>
            <Route path="/Contatos" element={ <Contatos/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
    );
}

export default RoutesApp;