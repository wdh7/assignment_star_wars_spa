import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInitialVehicles } from '../actions/vehiclesActions';
import VehicleCard from '../components/VehicleCard';


class VehiclesContainer extends Component {
  componentDidMount() {
    this.props.getInitialVehicles();
  }

  render() {
    const { isFetching, vehicles, error } = this.props;

    if (isFetching) {
      return <p>Loading...</p>
    }

    if (error) {
      return <p>{error}</p>
    }

    if (vehicles) {
      return (
        <div className='cards'>
          <ul>
            {vehicles.map(vehicle => <VehicleCard vehicle={vehicle} key={vehicle.name} />)}
          </ul>
        </div>
      )
    }
  }
}


const mapStateToProps = (state) => {
  return {
    isFetching: state.vehicles.isFetching,
    vehicles: state.vehicles.vehicles,
    error: state.vehicles.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInitialVehicles: () => {
      dispatch(getInitialVehicles());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VehiclesContainer);
