import React from 'react'
import { Switch, Route } from "react-router-dom";
import * as ROUTES from "./routes"
import Home from "./pages/Home"
import Pacientes from "./pages/Pacientes"
import Navbar from "./components/Navbar"
import './App.css';
import "./styles/utils.scss"

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Switch>
          <Route path={ROUTES.PACIENTES} component={Pacientes} />
          <Route path={ROUTES.HOME} component={Home} exact/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
