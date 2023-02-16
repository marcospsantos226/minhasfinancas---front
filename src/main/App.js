import React from 'react';

import Rotas from './rotas'
import Navbar from '../components/navbar'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'

//import CadastroUsuario from '../views/cadastroUsuario';



class App extends React.Component{

  render(){
    return(
      <>
      <Navbar />
    
       <div>
          <Rotas/>
        </div>
      </>
    )
  } 
}

export default App;
