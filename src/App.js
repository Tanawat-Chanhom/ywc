import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
