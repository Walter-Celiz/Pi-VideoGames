import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import CreateVideoGame from "./components/CreateVideoGame";
import DetailVideoGame from "./components/DetailVideoGame";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/videogames/create" component={CreateVideoGame}></Route>
          <Route path="/home/:id" component={DetailVideoGame}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
