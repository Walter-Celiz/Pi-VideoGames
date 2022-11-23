import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Post from "./components/Post";
import Details from "./components/Details";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/videogames/create" component={Post}></Route>
          <Route path="/videogames/:id" component={Details}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
