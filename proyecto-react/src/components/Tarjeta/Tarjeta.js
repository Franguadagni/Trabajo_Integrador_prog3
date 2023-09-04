import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./tarjeta.css";

class Tarjeta extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    } 
    render(){
        console.log(this.props);
        return (
            <article className="peli">
                <img className="imagenPS"  src={`https://image.tmdb.org/t/p/w500${this.props.datosPeli.poster_path}`} alt="imagen" />
                <div className="tituloaño">
                    <p className="titulo">{this.props.datosPeli.title}</p>
                    <p className="año">{this.props.datosPeli.release_date} </p>
                    <p className="descripcion"> </p>
                    <p className="verMas"> </p>
                    <Link to='' className="detalle"> Ir a Detalle </Link> 
                </div>
            </article>
        )
    }
}

export default Tarjeta
