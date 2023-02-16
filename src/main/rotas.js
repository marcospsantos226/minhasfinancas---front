import React from 'react'

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import CadastroUsuario from '../views/cadastroUsuario'

import Login from '../views/login'


function Rotas(){
    return(

        <BrowserRouter>
            <Routes>
                
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro-usuarios" element={<CadastroUsuario />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas

