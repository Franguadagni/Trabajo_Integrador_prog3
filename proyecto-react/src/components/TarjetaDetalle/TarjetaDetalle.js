import React, {Component} from "react";
import "./tarjetadetalle.css";
class TarjetaDetalle extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    render(){
        console.log(this.props)
        return(
            <React.Fragment> 
            <img className="fotoparasite" src={`https://image.tmdb.org/t/p/w500${this.props.detallePeli.poster_path}`} alt="foto"/>
            <div className="parasiteinfo">
            <h1 className="tituloparasite">{this.props.detallePeli.title}</h1>
            <div><p className="sinopsis">{this.props.detallePeli.overview}</p></div>
            <ul>
                <li><strong className="info">Calificacion:</strong> {this.props.detallePeli.vote_average} </li>
                <li ><strong className="info"> Fecha de estreno: </strong>{this.props.detallePeli.release_date}</li>
                <li className="infogen1"><strong className="info">Generos:</strong></li> 
                <li><strong className="info"> Duracion:</strong> {this.props.detallePeli.runtime}</li>
             </ul>
             <button className="botonfav" type="button">
                <img src="/img/white-star-icon-13.png" className="estrella" alt=""/>
             </button> 
            </div>
            </React.Fragment>
        )

       
    }

}
export default TarjetaDetalle