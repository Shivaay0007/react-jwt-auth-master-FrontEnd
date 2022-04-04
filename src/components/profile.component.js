// // import React from "react";
// // const profile = () => {
// //   const currentUser = this.state;
// //   return <h1>{currentUser} successfully Logged in </h1>;
// // };
// // export default profile;

import React, { Component } from "react";
import AuthService from "../services/auth.service";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
    };
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div className="profile-box-card">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile Successfully Logged
            in
          </h3>
        </header>
        <p>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <p>
          <strong>Address:</strong> {currentUser.address}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>
    );
  }
}
