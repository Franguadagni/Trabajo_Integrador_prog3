import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

class Buscar extends Component{

    constructor(props){
        super(props);
        this.state ={
            textoDelInput: ''
        }
    }

    controlarEnvio(evento){
        evento.preventDefault();
        console.log("No me mandé");
    }

    guardarDatosDelInput(eventoEnElInput){
        this.setState({
            textoDelInput: eventoEnElInput.target.value
        })

       // console.log(this.state.textoDelInput);

        return true
    }

    render(){
        // console.log(this.props);
        return(
              <div className="formDeBusqueda">
              <form className="busqueda"  method="GET" onSubmit={(event) => this.controlarEnvio(event)}>
                  <input className="search" type="text" name="Search" placeholder="¿Qué queres ver?" onChange={(e)=>this.guardarDatosDelInput(e)} value={this.state.textoDelInput}/> 
                  <Link to ={`/search-results/${this.state.textoDelInput}`}> <button className="bottonsearch" type="submit">Search</button> </Link>
              </form>
          </div>
        )
    }

}

export default Buscar