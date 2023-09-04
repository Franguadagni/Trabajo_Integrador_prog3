import React, {Component} from 'react';
import Tarjeta from '../Tarjeta/Tarjeta';

class Populares extends Component{
    constructor(){
        super()
        this.state={
            pelisPopulares:[], //aparecer movies
        }
    }
    componentDidMount(){
        //Buscamos datos
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e")
            .then( res => res.json())
            .then( data => this.setState({
                pelisPopulares: data.results,
            }))
            .catch()
    }
    
    
    render(){
        console.log(this.setState.pelisPopulares)
        return(
            <React.Fragment>
            <h2 className="tipodepalabra2">Peliculas Populares</h2>
            <section className="seriespopulares">
            
                {
                    this.state.pelisPopulares.map(
                        (peli,idx) => <Tarjeta key={peli + idx} datosPeli={peli}/>
                    )
                }
            </section>
            </React.Fragment>
        )
    }
}
export default Populares