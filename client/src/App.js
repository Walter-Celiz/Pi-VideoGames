import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
