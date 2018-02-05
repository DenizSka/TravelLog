import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Landmark from './components/Landmark';
import AddForm from './components/AddForm';
import Search from './components/Search';
import ApiResult from './components/ApiResult';


class App extends Component {
  constructor() {
    super();
    this.state = {
      landmarkData: null,
      shouldShowAddForm: false,
      currentlyEditing: null,
      apiData: null,
      apiDataLoaded: false,
    };
    this.getLandmarksFromDb = this.getLandmarksFromDb.bind(this);
    this.handleSubmitCall = this.handleSubmitCall.bind(this);
    this.landmarkSubmit = this.landmarkSubmit.bind(this);
    this.showAddForm = this.showAddForm.bind(this);
    this.setEditing = this.setEditing.bind(this);
    this.deleteLandmark = this.deleteLandmark.bind(this);
  }

  componentDidMount() {
    this.getLandmarksFromDb();
  }


  handleSubmitCall(value) {
    fetch(`https://cors.io/?https://maps.googleapis.com/maps/api/place/textsearch/json?query=landmarks+in+${value}&key=AIzaSyBM51oT9GKoMquXxaf8BIfdX-gumRtJkaU`)
      .then(res => res.json())
      .then((res) => {
        this.setState({
          apiData: res,
          apiDataLoaded: true,
        });
      })
      .catch(err => console.log(err));
  }

  getLandmarksFromDb() {
    fetch('/api/landmarks')
      .then(res => res.json())
      .then((res) => {
        this.setState({
          landmarkData: res.data.landmarks,
          shouldShowAddForm: false,
        });
      })
      .catch(err => console.log(err));
  }

  // what this method function does is grab from ADDFORM component and takes the method, event, data thats given by user, and takes in ID. we want to fetch the url then method will be replaced with POST and the information that the user inputs will be stringified and repacked into a JSON.stringified and lastley the new information will be re-rendered and passed into getLandmarksFromDb();
  landmarkSubmit(method, event, data, id) {
    event.preventDefault();
    fetch(`/api/landmarks/${id || ''}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then((res) => {
        this.getLandmarksFromDb();
      });
  }


  deleteLandmark(id) {
    const baseUrl = window.location.origin;
    const landmarkIdUrl = `/api/landmarks/${id}`;
    const newUrl = baseUrl.concat(landmarkIdUrl);
    fetch(newUrl, {
      method: 'DELETE',
    }).then(res => res.json())
      .then((res) => {
        this.getLandmarksFromDb();
      });
  }

  // Now we want to create a method called SHOWADDFORM()
  // I got this idea from ICECREAM APP but theres a difference from this versus what we are doing. We are using Switch and Routes in our rendering. Therefore Things will be passed to our components differently.
  // But i reccommend we should def keep routes because look at it, it is so pretty!!
  showAddForm() {
    this.setState({
      shouldShowAddForm: true,
    });
  }

  setEditing(id) {
    this.setState({
      currentlyEditing: id,
    });
  }

  render() {
    console.log(this.state.landmarkData);
    return (
      <div className="app">
        <Header />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (<Home
                {...props}
                landmarkData={this.state.landmarkData}
              />)}
            />
            <Route
              path="/landmarks/:id"
              render={props => (<Landmark
                {...props}
                landmarkData={this.state.landmarkData}
                deleteLandmark={this.deleteLandmark}
              />)}
            />
            <Route
              path="/new"
              render={props => (<AddForm
                {...props}
                isAdd
                landmarkSubmit={this.landmarkSubmit}
              />)}
            />
          </Switch>
        </div>

        <div className="Api">
          <Search handleSubmitCall={this.handleSubmitCall} />

          {this.state.apiDataLoaded ? (
            <div>
              <ApiResult apiData={this.state.apiData} />
            </div>) : (
              <p> Loading Landmarks... </p>
          )}

        </div>

        <Footer />
      </div>
    );
  }
}

export default App;

