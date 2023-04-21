import "./App.css";
import Landing from "./components//Landing/Landing.jsx";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Detail from "./components/Detail/Detail";
import DashBoard from "./components/DashBoard/DashBoard";
import CreadorCanchas from "./components/CreadorCanchas/CreadorCanchas";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import CanchasTable from "./components/CanchasTable/CanchasTable";
import MercadoPago from "./components/MercadoPago/MercadoPagoIntegracion";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route
          path="/canchas/:id"
          render={({ match }) => <Detail match={match} />}
        />
        <Route exact path="/dashboard">
          <DashBoard />
        </Route>
        <Route path="/creador">
          <CreadorCanchas />
        </Route>
        <Route path="/tabla">
          <CanchasTable />
        </Route>
        <Route path="/pagos/:id">
          <MercadoPago />
        </Route>
      </Switch>
    </>
  );
}

export default App;
