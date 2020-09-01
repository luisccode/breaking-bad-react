import React, { Fragment } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Characters from './components/Characters';
import Episodes from './components/Episodes';
import Quotes from './components/Quotes';
import Deaths from './components/Deaths';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Fragment>
            <main className="container">
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/characters" component={Characters}></Route>
                        <Route path="/Episodes" component={Episodes}></Route>
                        <Route path="/Quotes" component={Quotes}></Route>
                        <Route path="/Deaths" component={Deaths}></Route>
                    </Switch>
                </Router>
            </main>
        </Fragment>
    );
}

export default App;
