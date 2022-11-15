import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import "./App.css";
import Home from "./components/Home";

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
