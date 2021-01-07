import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ChooseTeams from './views/ChooseTeams';
import AddPlayer from './views/AddPlayer';
import NotFound from './views/NotFound';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/chooseteams" component={ChooseTeams} />
        <Route path="/addplayer" component={AddPlayer} />
        <Route component={NotFound} />
      </Switch>
      {/* <Route exact path="/" component={App} />
      <Route path="/chooseteams" component={ChooseTeams} /> */}
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
