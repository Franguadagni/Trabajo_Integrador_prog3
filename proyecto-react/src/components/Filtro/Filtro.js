import React, { Component } from 'react';

class Filtro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textoDelInput: ''
        }
    }

    controlarEnvio(evento) {
        evento.preventDefault();
        console.log("No me mandé");
        return true
    }

    guardarDatosDelInput(eventoEnElInput) {
        this.setState({
            textoDelInput: eventoEnElInput.target.value
        }, () => this.props.filtrar(this.state.textoDelInput))

        // console.log(this.state.textoDelInput);
        return true
    }

    render() {
        console.log(this.props);
        return (
            <div className="formDeBusqueda">
                <form className="filter" action="" method='GET' onSubmit={(e) => this.controlarEnvio(e)}>
                    <input className="search" type="text" name='filtro' placeholder="¿Qué queres filtrar?" onChange={(e) => this.guardarDatosDelInput(e)} value={this.state.textoDelInput} />
                    <button className="bottonsearch" type='submit'>Filtrar</button>
                </form>
            </div>
        )
    }

}

export default Filtro