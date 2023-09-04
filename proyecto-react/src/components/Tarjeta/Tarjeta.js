import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./tarjeta.css";

class Tarjeta extends Component{
    constructor(props){
        super(props)
        this.state={
            show: false,
            descripcion: props.datosPeli.overview
        }
    }
    handleshow(){
        this.setState({
            show:!this.state.show
        })
    } 
    render(){
        console.log(this.props);
        return (
            <article className="peli">
                <img className="imagenPS"  src={`https://image.tmdb.org/t/p/w500${this.props.datosPeli.poster_path}`} alt="imagen" />
                <div className="tituloaño">
                    <p className="titulo">{this.props.datosPeli.title}</p>
                    <p className="año">{this.props.datosPeli.release_date} </p>
                    <p className="verMas">{this.state.show ? this.state.descripcion : ''} </p>
                    <p onClick={()=> this.handleshow()}>{this.state.show ? 'Ver menos' : 'Ver más'}</p>
                    <Link to= {`/detalle/${this.props.datosPeli.id}`} className="detalle"> Ir a Detalle </Link> 
                </div>
            </article>
        )
    }
}

export default Tarjeta
