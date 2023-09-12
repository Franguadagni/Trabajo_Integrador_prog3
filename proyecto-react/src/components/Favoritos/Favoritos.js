import React, {Component} from 'react';
import Tarjeta from '../Tarjeta/Tarjeta';
import "./favoritos.css";

class Favoritos extends Component{
    constructor(props){
        super(props);
        this.state = {
            favs: []
        }
    }

    componentDidMount(){
        let favoritos = [];
        let recuperoStoragePelis = localStorage.getItem('favoritos')
        if (
            recuperoStoragePelis !== null 
        )
        {
            let pasarAArray = JSON.parse(recuperoStoragePelis);
            favoritos = pasarAArray
        }
        favoritos.map((id) => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=es-ES`)
            .then(response => response.json())
            .then( favs => { 
                let listaPelis = this.state.favs;
                listaPelis.push(favs);
                this.setState({favs: listaPelis});
            } )
            .catch( error => console.log(error) )
        })
    }
    render(){    
        return(
          <React.Fragment>
            <h2 class="titulohp">Favoritos</h2> 
            {
                this.state.peliFav.length >0?
                    
            <section class="searchresults">
                <div class="fondodrama">  
                        {this.state.favs.map(
                            (peliFav,idx) => <Tarjeta key={peliFav + idx} datosPeli={peliFav}/>
                    )} 
                </div>
            </section>:
            <h3> Loading...</h3> }
            
            
          </React.Fragment>
        )
    }
}

export default Favoritos;