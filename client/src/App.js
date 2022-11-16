// Nodes
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Landing from "./components/Landing";
import Home from "./components/Home";

// CSS
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
