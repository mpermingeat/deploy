import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import axios from "axios";
import MyNavBar from "./components/MyNavBar/MyNavBar";
import About from "./pages/About/About";
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe";
import DetailRecipe from "./pages/DetailRecipe/DetailRecipe";
import Error404 from "./pages/Error404/Error404";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
axios.defaults.baseURL = "https://deploy-production-5432.up.railway.app";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== "/" && <MyNavBar />}
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route
          exact
          path="/detail/:id/:dataBase"
          component={DetailRecipe}
        ></Route>
        <Route exact path="/create" component={CreateRecipe}></Route>\
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/*" component={Error404}></Route>
      </Switch>
    </div>
  );
}

export default App;
