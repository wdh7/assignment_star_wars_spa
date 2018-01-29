import React, { Component } from 'react';
import { connect } from 'react-redux';
import findByName from '../helpers/find';
import VehicleDetails from '../components/VehicleDetails';

class VehicleContainer extends Component {
  render() {
    return (
      <VehicleDetails vehicle={this.props.vehicle} />
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    vehicle: findByName(state.vehicles.vehicles, ownProps.match.params.name)
  };
};

export default connect(mapStateToProps, null)(VehicleContainer);
