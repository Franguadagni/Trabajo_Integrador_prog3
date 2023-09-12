import React, {Component} from 'react';
import TarjetaDetalle from '../TarjetaDetalle/TarjetaDetalle';
import "./detalle.css";
class Detalle extends Component{
    constructor(props){
        super(props)
        this.state={
            detallePeli:[], //aparecer movies
            generos:[]
        }
    }
    componentDidMount(){
        //Buscamos datos
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e`)
            .then( res => res.json())
            .then( data => this.setState({
                detallePeli: data,
            }))
            .catch( error => console.log(error))

        fetch(``)
            .then( res => res.json())
            .then( data => this.setState({
                generos: data,
            }))
            .catch( error => console.log(error))
        
    }

    render(){    
        return(
            <React.Fragment>
            {
                this.state.detallePeli.length >0?
            <section className='infopelicula'>
                <TarjetaDetalle detallePeli={this.state.detallePeli} generos={this.state.generos}/>
            </section>:
            <h3>Loading...</h3>
            }
             </React.Fragment>
        )
    }
}
export default Detalle