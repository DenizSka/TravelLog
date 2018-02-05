import React, { Component } from 'react';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.landmark ? props.landmark.name : '',
      city: props.landmark ? props.landmark.city : '',
      formatted_address: props.landmark ? props.landmark.formatted_address : '',
      description: props.landmark ? props.landmark.description : '',
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    const name = e.target.name;
    const val = e.target.value;
    this.setState({
      [name]: val,
    });
  }

  // having trouble saving the stuff into our database. This was referenced form the icecream app. Ive tried a different way where in handleChange i used this.setState =({
  //  name: e.target.name,
  //  city: e.target.city, etc for all the inputs
  // })
  // but the information wasnt able to be saved. The method POST should activate our save method in our travelController. and in turn insert the new data into our DB by accessing models landmarkDB.
  render() {
    return (
      <div className="add">
        <form onSubmit={(
          this.props.isAdd
            ? e => this.props.landmarkSubmit('POST', e, this.state)
            : e => this.props.landmarkSubmit('PUT', e, this.state, this.props.landmark.id)
            )}
        >
          <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
          <input type="text" name="city" placeholder="city" value={this.state.city} onChange={this.handleChange} />
          <input type="text" name="formatted_address" placeholder="formatted_address" value={this.state.formatted_address} onChange={this.handleChange} />
          <input type="text" name="description" placeholder="description" value={this.state.description} onChange={this.handleChange} />
          <input type="submit" value={this.props.isAdd ? 'Add it!' : 'Edit it!'} />
        </form>
      </div>
    );
  }
}


export default AddForm;
