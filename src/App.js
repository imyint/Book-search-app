import Header from "./client/Components/Header/Header";
import Home from "./client/Components/Home/Home";
import Wishlist from "./client/Components/Wishlist/Wishlist";
import Register from "./client/Components/Register/Register";
import Login from "./client/Components/Login/Login";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/wishlist">
            <Wishlist />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
