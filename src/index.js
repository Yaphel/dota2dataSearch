import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import SearchIndex from './components/searchIndex';
import Match from './components/match/match';
import Player from './components/player/player';


//路由
ReactDOM.render((
    <Router>
        <Route exact path="/" component={SearchIndex} />
        <Route path="/match/:matchid" component={Match} />
        <Route path="/player/:playerid" component={Player} />
    </Router>
), document.getElementsByTagName('body')[0]);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
