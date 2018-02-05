import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    { console.log(this.state.value); }
    { this.props.handleSubmitCall(this.state.value); }
    event.preventDefault();
  }

  render() {
    return (
      <div className="header">
        <h1> Landmarks </h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            City:
            <input type="text" id="searchbar" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="City Search" />
        </form>
      </div>
    );
  }
}


export default Search;
