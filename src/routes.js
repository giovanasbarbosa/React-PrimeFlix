import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';

import Erro from './pages/Erro';

import Header from './components/header';
import Footer from './components/footer';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/React-PrimeFlix' element={ <Home/> } />
                <Route path='/filme/:id' element={ <Filme/> } />
                <Route path='/favoritos' element={ <Favoritos/> }></Route>

                <Route path='*' element={<Erro/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp;