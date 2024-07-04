import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Habilidades from './pages/Habilidades';
import Skills from './pages/Skills';
import Projetos from './pages/Projetos';
import Certificados from './pages/Certificados';
import Contatos from './pages/Contatos';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={ <Home/>}></Route>
            <Route path="/Sobre" element={ <Sobre/>}></Route>
            <Route path="/Habilidades" element={ <Habilidades/>}></Route>
            <Route path="/Skills" element={ <Skills/>}></Route>
            <Route path="/Projetos" element={ <Projetos/>}></Route>
            <Route path="/Certificados" element={ <Certificados/>}></Route>
            <Route path="/Contatos" element={ <Contatos/>}></Route>
        </Routes>
        
        </BrowserRouter>
    );
}

export default RoutesApp;