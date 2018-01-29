import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import PeopleContainer from '../containers/PeopleContainer';
import PlanetsContainer from '../containers/PlanetsContainer';
import VehiclesContainer from '../containers/VehiclesContainer';
import PersonContainer from '../containers/PersonContainer';
import VehicleContainer from '../containers/VehicleContainer';
import PlanetContainer from '../containers/PlanetContainer';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/people' component={PeopleContainer} />
            <Route path='/people/:name' component={PersonContainer} />
            <Route exact path='/planets' component={PlanetsContainer} />
            <Route path='/planets/:name' component={PlanetContainer} />
            <Route exact path='/vehicles' component={VehiclesContainer} />
            <Route path='/vehicles/:name' component={VehicleContainer} />
            <Route render={() => <h3>Page Not Found</h3>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
