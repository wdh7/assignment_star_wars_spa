import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import PeopleContainer from '../containers/PeopleContainer';

// <Route path='/planets' component={PlanetsContainer} />
// <Route path='/vehicles' component={VehiclesContainer} />


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/people' component={PeopleContainer} />
            <Route render={() => <h3>Page Not Found</h3>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
