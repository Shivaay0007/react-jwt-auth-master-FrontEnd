import React, { Component } from "react";
import Services from "./Services";
import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";
import Contact from "./Contact";
// import Navbar from "./Navbar";
import FooterPagePro from "./Footer";

// import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    // UserService.getPublicContent().then(
    //   (response) => {
    //     this.setState({
    //       content: response.data,
    //     });
    //   },
    //   (error) => {
    //     this.setState({
    //       content:
    //         (error.response && error.response.data) ||
    //         error.message ||
    //         error.toString(),
    //     });
    //   }
    // );
  }

  render() {
    return (
      <div className="container">
        {/* <Navbar /> */}
        {/* <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header> */}

        <main>
          <Hero />
          <FeaturedProducts />
          <Services />
          <Contact />
        </main>
        <FooterPagePro />
      </div>
    );
  }
}
