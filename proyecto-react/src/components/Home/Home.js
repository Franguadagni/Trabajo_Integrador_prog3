import React, {Component} from 'react';
import "./home.css";
import Tarjeta from '../Tarjeta/Tarjeta';

class Home extends Component{
    constructor(){
        super()
        this.state={
            pelisPopulares:[], //aparecer movies
            pelisTopRated: [],
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

        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e")
            .then( res => res.json())
            .then( data => this.setState({
                pelisTopRated: data.results,
            }))
            .catch()
    }
    
    
    render(){
        console.log(this.setState.pelisPopulares)
        console.log(this.setState.pelisTopRated)
        return(
            <React.Fragment>
            <h2 className="tipodepalabra2">Series Populares</h2>
            <section className="seriespopulares">
            
                {
                    this.state.pelisPopulares.slice(0,6).map(
                        (peli,idx) => <Tarjeta key={peli + idx} datosPeli={peli}/>
                    )
                }
            </section>
            </React.Fragment>
        )
    }
}


export default Home