import React, {Component} from 'react';
import Tarjeta from '../Tarjeta/Tarjeta';
import "./valoradas.css";
class Valoradas extends Component{
    constructor(){
        super()
        this.state={
            pelisTopRated: [],
        }
    }
    componentDidMount(){
        //Buscamos datos
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e")
            .then( res => res.json())
            .then( data => this.setState({
                pelisTopRated: data.results,
            }))
            .catch()
    }
    
    
    render(){
        console.log(this.setState.pelisTopRated)
        return(
            <React.Fragment>
            <h2 className="tipodepalabra2">Peliculas mas valoradas</h2>
            <button className="boton" > Traer más </button>
            <section className="pelisvaloradas">
                {
                    this.state.pelisTopRated.map(
                        (peli,idx) => <Tarjeta key={peli + idx} datosPeli={peli}/>
                    )
                }
            </section>
            </React.Fragment>
        )
    }
}
export default Valoradas