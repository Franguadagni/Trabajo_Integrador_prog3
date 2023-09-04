import React, {Component} from 'react';
class Detalle extends Component{
    constructor(props){
        super(props)
        this.state={
            detallePeli:[], //aparecer movies
        }
    }
    componentDidMount(){
        //Buscamos datos
        fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=es-ES`)
            .then( res => res.json())
            .then( data => this.setState({
                detallePeli: data.results,
            }))
            .catch()
    }

    render(){    
        return(
           <section className='infopelicula'>
           </section>
        )
    }
}
export default Detalle