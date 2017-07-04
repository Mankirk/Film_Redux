import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import LightBox from "./lightBox/LightBox";
import Movie from "./Movie/Movie";
import Nav from "./Nav/Nav";

import HomePage from "../containers/HomePage/HomePage";
import MovieList from "../containers/MovieList";
import MovieDetail from "../containers/MovieDetail/MovieDetail";
import WatchList from "../containers/WatchList/WatchList";

const Main = () => (
    <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/movies" component={ MovieList } />
        <Route path="/movies/:id" component={ MovieDetail } />
        <Route path="/watchList" component={ WatchList } />
    </Switch>
);

const App = () => ( <div>
    <Nav />
    <Main />
</div> );

export default App;
