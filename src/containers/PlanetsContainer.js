import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInitialPlanets } from '../actions/planetsActions';
import PlanetCard from '../components/PlanetCard';

class PlanetsContainer extends Component {
  componentDidMount() {
    this.props.getInitialPlanets();
  }

  render() {
    const { isFetching, planets, error } = this.props;

    if (isFetching) {
      return <p>Loading...</p>
    }

    if (error) {
      return <p>{error}</p>
    }

    if (planets) {
      return (
        <div className='cards'>
          <ul>
            {planets.map(planet => <PlanetCard planet={planet} key={planet.name} />)}
          </ul>
        </div>
      )
    }
  }
}


const mapStateToProps = (state) => {
  return {
    isFetching: state.planets.isFetching,
    planets: state.planets.planets,
    error: state.planets.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInitialPlanets: () => {
      dispatch(getInitialPlanets());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PlanetsContainer);
