import React, { Component } from 'react';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    { this.props.handleLoginSubmit(e, this.state); }
  }

  render() {
    return (
      <div className="login-box">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleInputChange} />
          <input type="text" name="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange} />
          <input type="submit" value="Log In" />
        </form>
      </div>
    );
  }
}

export default Login;

