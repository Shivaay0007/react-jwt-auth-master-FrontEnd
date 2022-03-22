import React, { Component, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaUserMinus, FaUserPlus, FaOpencart } from "react-icons/fa";
import logo from "./assets/logo.svg";

import AuthService from "./services/auth.service";

import AboutPage from "./components/AboutPage";
import EcommercePage from "./components/EcommercePage";
// import { Products } from "./pages";
import Contact from "./components/Contact";
import Login from "./components/login.component";
import Register from "./components/register.component";
import SingleProductPage from "./components/SingleProductPage";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import AddToCart from "./components/AddToCart";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.GetSingleProductId = this.GetSingleProductId.bind(this);

    const { cookies } = props;

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: "",
      content: "",
    };
  }

  GetSingleProductId(pid) {
    // console.log("pid---", pid);

    this.setState({
      content: pid,
    });
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand ">
          <Link to={"/"} className="navbar-brand">
            <img src={logo} alt="" width="195px" margin-left="-25px" />
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/products"} className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/About Us"} className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Contact"} className="nav-link">
                Contacts
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/AddToCart"} className="nav-link">
                {/* Cart */}&nbsp;&nbsp;
                <FaOpencart size={30} className="cart" />
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>

              <li className="nav-item">
                <a
                  href
                  to="/login"
                  className="nav-link"
                  onClick={this.logOut({ returnTo: window.location.origin })}
                >
                  LogOut
                  <FaUserMinus />
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                  <SiGnuprivacyguard />
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                  <FaUserPlus />
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            {/* <Route
              exact
              path={["/products"]}
              component={<EcommercePage contentSetter={content} />}
            /> */}
            <Route exact path={["/products"]}>
              <EcommercePage GetSingleProductId={this.GetSingleProductId} />
            </Route>
            <Route exact path={["/About Us"]} component={AboutPage} />
            <Route exact path={["/Contact"]} component={Contact} />
            {/* <Route
              exact
              path={["/SingleProductPage"]}
              component={<SingleProductPage data={content} />}
            /> */}
            <Route exact path={["/SingleProductPage"]}>
              {/* {console.log("pId ", this.state.content)} */}
              <SingleProductPage
                // cookies={this.cookies}
                contentSetter={this.GetSingleProductId}
                pId={this.state.content}
              />
            </Route>
            <Route exact path="/AddToCart" component={AddToCart} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>

        <AuthVerify logOut={this.logOut} />
      </div>
    );
  }
}

export default App;
