import React, { Component } from 'react';
import "./home.css";
import Tarjeta from '../Tarjeta/Tarjeta';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            pelisPopulares: [], //aparecer movies
            pelisTopRated: [],
        }
    }
    componentDidMount() {
        //Buscamos datos
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e")
            .then(res => res.json())
            .then(data => this.setState({
                pelisPopulares: data.results,
            }))
            .catch(error => console.log(error))

        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e")
            .then(res => res.json())
            .then(data => this.setState({
                pelisTopRated: data.results,
            }))
            .catch(error => console.log(error))
    }


    render() {
        console.log(this.setState.pelisPopulares)
        console.log(this.setState.pelisTopRated)
        return (
            <React.Fragment>
                <h2 className="tipodepalabra2"><Link to='/populares' className='ver-todas-link'> Peliculas Populares </Link> </h2>
                {
                    this.state.pelisPopulares.length >0?
                    <section className="seriespopulares">
                        {
                        this.state.pelisPopulares.slice(0, 6).map(
                            (peli, idx) => <Tarjeta key={peli + idx} datosPeli={peli} />
                        )
                    }
                </section>:
                <h3> Loading...</h3>
            }
            <h2 className="tipodepalabra2"><Link to='/valoradas' className='ver-todas-link'> Peliculas más valoradas </Link> </h2>
            {
                this.state.pelisTopRated.length >0?
                <section className="pelisvaloradas">
                    {
                        this.state.pelisTopRated.slice(0, 6).map(
                            (peli, idx) => <Tarjeta key={peli + idx} datosPeli={peli} />
                        )
                    }
                </section>:
                <h3> Loading...</h3>
            }   
            </React.Fragment>
                )
    }
}


export default Home