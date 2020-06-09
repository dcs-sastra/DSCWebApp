import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Pages/NavBar/Nav";
import loader from "./loader.gif";
import "./Main.css";
import Footer from "./Pages/Footer/Footer";

const Teams = lazy(() => import("./Pages/Team/Team"));
const Home = lazy(() => import("./Pages/Home/Home"));
const EventMain = lazy(() => import("./Pages/Events"));

const Loader = () => {
  return (
    <div className="loader">
      <img src={loader} />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={EventMain} />
          <Route exact path="/teams" component={Teams} />
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
