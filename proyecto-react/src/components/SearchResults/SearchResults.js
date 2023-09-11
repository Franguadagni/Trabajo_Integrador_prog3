import React, {Component} from 'react';
import Tarjeta from '../Tarjeta/Tarjeta';
import "./searchresults.css";
class SearchResults extends Component{
    constructor(props){
        super(props)
        this.state={
            peliBuscada:[], //aparecen los results de busqueda
        }

    }
    componentDidMount(){
        //Buscamos datos
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=en-US&query=${this.props.match.params.buscado}&page=1&include_adult=false`)
            .then( res => res.json())
            .then( data => this.setState({
                peliBuscada: data.results,
            }))
            .catch( error => console.log(error) )
    }
    render(){    
        return(
          <React.Fragment>
            <h2 class="titulohp">Resultados de Busqueda</h2> 
            <div class="fondodrama">  
                <section class="searchresults">
                {
                    this.state.peliBuscada.slice(0,12).map(
                        (peli,idx) => <Tarjeta key={peli + idx} datosPeli={peli}/>
                    )
                }
                </section>
            </div>
          </React.Fragment>
        )
    }
}
export default SearchResults