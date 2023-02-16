import React from 'react'

import Card from '../components/card'
import FormGroup from '../components/form-group'

class CadastroUsuario extends React.Component{

     excecao;


    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    validarSenha = () => {
        if(this.state.senha != this.state.senhaRepeticao){
            console.log("As senhas nao correspondem")
            return false
        }

        
        return true
    }

    validarDados = () => {
        this.excecao = true
        

        if(!this.state.nome){
            console.log("O campo nome nao foi preenchido")
            this.excecao = false
        }

        if(!this.state.email) {
            console.log("O campo email nao foi preenchido")
            this.excecao = false
            
        }

        if(!this.state.senha) {
            console.log("O campo senha nao foi preenchido")
            this.excecao = false
        
        }

        if(!this.state.senhaRepeticao) {
            console.log("O campo repita senha não foi preenchido")
            this.excecao = false
            
        }

        
    
        if(this.excecao == true && this.validarSenha() == true){
            console.log("Dados salvo com sucesso" )

        
           }

    

    }

    cadastrar = () => {
        this.validarSenha();
        this.validarDados();
       

        

       
         
    }

    render(){
        return(
            <div className='container'>
                <Card title="Cadastro de Usuário">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup label="Nome: *" htmlFor="inputNome">
                                    <input type="text"
                                     id="inputNome" 
                                     className="form-control"
                                     name="nome"
                                     onChange={e => this.setState({nome: e.target.value})}/>
                                </FormGroup>

                                <FormGroup label="Email: *" htmlFor="inputEmail">
                                    <input type="email"
                                     id="inputEmail" 
                                     className="form-control"
                                     name="email"
                                     onChange={e => this.setState({email: e.target.value})}/>
                                </FormGroup>

                                <FormGroup label="Senha: *" htmlFor="inputSenha">
                                    <input type="password"
                                     id="inputSenha" 
                                     className="form-control"
                                     name="senha"
                                     onChange={e => this.setState({senha: e.target.value})}/>
                                </FormGroup>

                                <FormGroup label="Repita a senha: *" htmlFor="inputRepitaSenha">
                                    <input type="password"
                                     id="inputRepitaSenha" 
                                     className="form-control"
                                     name="senha"
                                     onChange={e => this.setState({senhaRepeticao: e.target.value})}/>
                                </FormGroup>
                                <button onClick={this.cadastrar} type="button" className="btn btn-success">Salvar</button>
                                <button type="button" className="btn btn-danger">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }

}

export default CadastroUsuario