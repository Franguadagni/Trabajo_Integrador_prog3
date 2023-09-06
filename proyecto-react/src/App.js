import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Valoradas from "./components/Valoradas/Valoradas";
import Populares from "./components/Populares/Populares";
import Detalle from "./components/Detalle/Detalle";
import SearchResults from "./components/SearchResults/SearchResults";
function App() {
  return (
     <React.Fragment>
      <Navbar/>
      <main>
        <Switch>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/valoradas" component={Valoradas}></Route>
          <Route path="/populares" component={Populares}></Route>
          <Route path="/detalle/id/:id" component={Detalle}></Route>
          <Route path="/search-results/buscado/:buscado" component={SearchResults}></Route>
        </Switch>
      </main>
      <Footer />
     </React.Fragment>
  );
}

export default App;
