import React, { Component } from 'react';
import { connect } from 'react-redux';
import findByName from '../helpers/find';
import PlanetDetails from '../components/PlanetDetails';

class PlanetContainer extends Component {
  render() {
    return <PlanetDetails planet={this.props.planet} />
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    planet: findByName(state.planets.planets, ownProps.match.params.name)
  };
};

export default connect(mapStateToProps, null)(PlanetContainer);
