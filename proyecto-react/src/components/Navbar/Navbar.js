import React from "react";
import Buscar from "../Buscar/Buscar";
import {Link} from 'react-router-dom';
function Navbar(){
    return (
        <header>
        <nav className="nav1">
        <div className="logoynav">
            <a  href="/">
                <img className="logo" src="/img/1.jpg" alt="logo" />
            </a>
            <div className="nav2">
                <ul className="nav3">
                    <li className="item uno " >
                        <Link to='' className="nave">Favoritos</Link>
                    </li>
                    <li className="item dos">
                    <Link to='/populares' className="nave">Populares</Link> 
                    </li>
                    <li className="item dos">
                    <Link to='/valoradas' className="nave">+Valoradas</Link> 
                    </li>    
                </ul>
            </div>
        </div>
        <Buscar/>
    </nav>
    </header> 
    )
}

export default Navbar