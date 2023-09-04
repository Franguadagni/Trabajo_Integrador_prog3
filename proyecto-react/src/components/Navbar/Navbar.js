import React from "react";
import {Link} from 'react-router-dom';
function Navbar(){
    return (
        <header>
        <nav className="nav1">
        <div className="logoynav">
            <a  href="./index.html">
                <img className="logo" src="/img/1.jpg" alt="logo" />
            </a>
            <div className="nav2">
                <ul className="nav3">
                    <li className="item uno " >
                        <Link to='' className="nave">Favoritos</Link>
                    </li>
                    <li className="item dos">
                    <Link to='' className="nave">Populares</Link> 
                    </li>
                    <li className="item dos">
                    <Link to='' className="nave">+Valoradas</Link> 
                    </li>    
                </ul>
            </div>
        </div>
        <div className="formDeBusqueda">
            <form className="busqueda" action="" method="get">
                <input className="search" type="text" name="Search" placeholder="¿Qué queres ver?" value=""/> 
                <button className="bottonsearch" type="submit">Search</button>
            </form>
            <p className="alert"></p> 
        </div>
       
    </nav>
    </header> 
    )
}

export default Navbar