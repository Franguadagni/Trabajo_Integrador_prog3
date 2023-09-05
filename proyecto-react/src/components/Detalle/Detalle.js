import React, {Component} from 'react';
import TarjetaDetalle from '../TarjetaDetalle/TarjetaDetalle';
import "./detalle.css";
class Detalle extends Component{
    constructor(props){
        super(props)
        this.state={
            detallePeli:[], //aparecer movies
        }
    }
    componentDidMount(){
        //Buscamos datos
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e`)
            .then( res => res.json())
            .then( data => this.setState({
                detallePeli: data,
            }))
            .catch()
    }

    render(){    
        return(
           <section className='infopelicula'>
            <TarjetaDetalle detallePeli={this.state.detallePeli} />
           </section>
        )
    }
}
export default Detalle