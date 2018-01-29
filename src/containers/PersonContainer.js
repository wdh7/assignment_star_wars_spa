import React, { Component } from 'react';
import { connect } from 'react-redux';
import findByName from '../helpers/find';
import PersonDetails from '../components/PersonDetails';


class PersonContainer extends Component {
  render() {
    return (
      <PersonDetails person={this.props.person} />
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    person: findByName(state.people.people, ownProps.match.params.name)
  };
};

export default connect(mapStateToProps, null)(PersonContainer);
