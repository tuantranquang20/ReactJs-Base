import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "@screens/HomeScreen";
import UserScreen from "@screens/UserScreen";

import MainScreen from "@screens/MainScreen";
import LoginScreen from "@screens/Auth/LoginScreen";
import PrivateRoute from "./PrivateRoute";
import Header from "@components/Header";
import NavBar from "@components/NavBar";

export class AppNavigator extends Component {
  render() {
    return (
      <Router>
        <Route path="/Login" exact component={LoginScreen} />
        <PrivateRoute path="/pageAdmin" exact Component={MainNavigator} />
        <PrivateRoute path="/user" exact Component={UserScreen} />
      </Router>
    );
  }
}

class MainNavigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <PrivateRoute path="/pageAdmin" exact Component={HomeScreen} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);