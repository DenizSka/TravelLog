import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Landmark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currId: null,
      currLandmark: null,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const urlId = window.location.pathname.split('/')[2];
    const currId = parseInt(urlId);
    const currLandmark = this.props.landmarkData.filter(landmark => landmark.id == currId);
    this.setState({
      currId,
      currLandmark: currLandmark[0],
    });
  }

  handleDelete(e) {
    e.preventDefault();
    { this.props.deleteLandmark(this.state.currId); }
  }

  render() {
    return (
      <div>
        {this.state.currLandmark ?
          <section className="landmark">
            <h3> {this.state.currLandmark.name} </h3>
            <h4> City: {this.state.currLandmark.city} </h4>
            <h4> Address: {this.state.currLandmark.formatted_address} </h4>
            <h4> Description: {this.state.currLandmark.description} </h4>
            <button onClick={this.handleDelete}>
         Delete Landmark
            </button>
          </section>
        : null }
      </div>

    );
  }
}

export default Landmark;

