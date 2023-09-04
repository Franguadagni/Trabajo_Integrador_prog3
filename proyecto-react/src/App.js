import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home"

function App() {
  return (
     <React.Fragment>
      <Navbar/>
      <main>
        <Switch>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path=""></Route>
          <Route path=" "></Route>
        </Switch>
      </main>
      <Footer />
     </React.Fragment>
  );
}

export default App;
