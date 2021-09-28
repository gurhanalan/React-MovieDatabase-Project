import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import MovieList from "./pages/MovieList/MovieList";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/:id" component={MovieDetails} />
                <Route path="/" component={MovieList} />
            </Switch>
        </Router>
    );
};

export default App;
