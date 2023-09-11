import React, {Component} from 'react';
import Tarjeta from '../Tarjeta/Tarjeta';
import "./populares.css";
import Filtro from '../Filtro/Filtro';

class Populares extends Component{
    constructor(){
        super()
        this.state={
            pelisPopulares:[], //aparecer movies
            botonApretado: false
        }
    }
    componentDidMount(){
        //Buscamos datos
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e")
            .then( res => res.json())
            .then( data => this.setState({
                pelisPopulares: data.results,
            }))
            .catch( error => console.log(error) )
    }
    filtrarPeliculas(textoAFiltrar){
        let peliculasFiltradas = this.state.pelisPopulares.filter(function(unaPelicula){
            return unaPelicula.title.includes(textoAFiltrar)
        })
        this.setState({
            pelisPopulares: peliculasFiltradas
        })
    }
    traerMas(){

    }
    
    render(){
        console.log(this.setState.pelisPopulares)
        return(
            <React.Fragment>
            <h2 className="tipodepalabra2">Peliculas Populares</h2>
            <Filtro filtrar={(texto) => this.filtrarPeliculas(texto)}/>
            <button  onClick={()=>this.traerMas(this.state.pelisPopulares)} className="boton" > Traer más </button>
            <section className="seriespopulares">
                {  
                    this.state.pelisPopulares.slice(0,12).map(
                        (peli,idx) => <Tarjeta key={peli + idx} datosPeli={peli}/>
                    )
                }
            </section>
            </React.Fragment>
        )
    }
}
export default Populares