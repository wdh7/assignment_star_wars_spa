import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInitialPeople } from '../actions/peopleActions';

class PeopleContainer extends Component {
  componentDidMount() {
    // AJAX request to get all people from SWAPI
    this.props.getInitialPeople();
  }

  render() {
    const { isFetching, people, error } = this.props;

    if (isFetching) {
      return <p>Loading...</p>
    }

    if (error) {
      return <p>Error...</p>
    }

    if (people) {
      return <p>{ JSON.stringify(people, null, 2) }</p>
    }

  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    people: state.people,
    error: state.error
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    getInitialPeople: () => {
      dispatch(getInitialPeople());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
