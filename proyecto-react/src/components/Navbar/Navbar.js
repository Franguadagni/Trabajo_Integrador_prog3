import React from "react";
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
                        <a className="nave" href="./genres.html">Favoritos</a> 
                    </li>
                    <li className="item dos">
                        <a className="nave" href="./favorites.html">Populares</a> 
                    </li>
                    <li className="item dos">
                        <a className="nave" href="./favorites.html">+Valoradas</a> 
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