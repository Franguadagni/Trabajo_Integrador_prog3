import React, {Component} from 'react';
import Tarjeta from '../Tarjeta/Tarjeta';
import "./valoradas.css";
import Filtro from '../Filtro/Filtro';

class Valoradas extends Component{
    constructor(){
        super()
        this.state={
            pelisTopRated: [],
        }
    }
    componentDidMount(){
        //Buscamos datos
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&page="+this.state.page)
            .then( res => res.json())
            .then( data => this.setState({
                pelisTopRated: data.results,
            }))
            .catch( error => console.log(error) )
    }
    filtrarPeliculas(textoAFiltrar){
        let peliculasFiltradas = this.state.pelisTopRated.filter(function(unaPelicula){
            return unaPelicula.title.includes(textoAFiltrar)
        })
        this.setState({
            pelisTopRated: peliculasFiltradas
        })
    }
    traerMas(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&page="+this.state.page)
            .then( res => res.json())
            .then( data => this.setState({
                pelisTopRated: this.state.pelisTopRated.concat(data.results),
                page:this.state.page+1
            }))
            .catch( error => console.log(error) )
    }
    
    
    render(){
        console.log(this.setState.pelisTopRated)
        return(
            <React.Fragment>
            <h2 className="tipodepalabra2">Peliculas mas valoradas</h2>
            <Filtro filtrar={(texto) => this.filtrarPeliculas(texto)}/>
            {
                this.state.pelisTopRated.length >0?
            <section className="pelisvaloradas">
                {
                    this.state.pelisTopRated.map(
                        (peli,idx) => <Tarjeta key={peli + idx} datosPeli={peli}/>
                    )
                }
            </section>:
            <h3>Loading...</h3>
            }
            
            <button  onClick={()=>this.traerMas(this.state.pelisTopRated)}className="boton" > Traer más </button>
            </React.Fragment>
        )
    }
}
export default Valoradas