import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInitialPeople } from '../actions/peopleActions';
import PersonCard from '../components/PersonCard';

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
      return <p>{error}</p>
    }

    if (people) {
      return (
        <div className='cards'>
          <ul>
            {people.map(person => {
              return <PersonCard person={person} key={person.name}/>
            })}
          </ul>
        </div>
      )
    }

  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.people.isFetching,
    people: state.people.people,
    error: state.people.error
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
