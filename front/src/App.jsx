import "./App.css";
import Landing from "./components//Landing/Landing.jsx";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import DashBoard from "./components/DashBoard/DashBoard";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/home">
          <Home />
          <Footer />
        </Route>
        <Route exact path="/dashboard" component={DashBoard} />
      </Switch>
    </>
  );
}

export default App;
