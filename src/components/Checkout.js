import React, { Component } from "react";
import {
  FaEnvelopeOpenText,
  FaTruckMoving,
  FaReceipt,
  FaOpencart,
} from "react-icons/fa";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import AuthService from "../services/auth.service";
import styled from "styled-components";

class CheckoutView extends Component {
  constructor(props) {
    super();
    this.state = {
      currentUser: AuthService.getCurrentUser(),
      //   LocalStorage: JSON.parse(localStorage.getItem("Cart")),
    };
    // console.log("localstorage", this.LocalStorage);
  }

  render() {
    const { currentUser } = this.state;
    // const { LocalStorage } = this.state;
    return (
      <Wrapper>
        <React.Fragment>
          <div className="bg-secondary border-top p-4 text-white mb-3">
            <h1 className="display-6">Checkout</h1>
          </div>
          <div className="container mb-3">
            <div className="row">
              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-header">
                    <FaEnvelopeOpenText className="i-va" size={30} /> Contact
                    Info
                  </div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <text
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          aria-label="Email Address"
                        >
                          {currentUser.email}
                        </text>
                      </div>
                      <div className="col-md-6">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Mobile no"
                          aria-label="Mobile no"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-header">
                    <FaTruckMoving className="i-va" size={30} /> Shipping
                    Infomation
                  </div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-md-12">
                        <text
                          type="text"
                          className="form-control address"
                          placeholder="Name"
                          required
                        >
                          {currentUser.username}
                        </text>
                      </div>
                      <div className="col-md-6">
                        <label
                          type="text"
                          className="form-control label"
                          placeholder="Addresss"
                          required
                        >
                          {currentUser.address.substring(0, 15)}...
                          {currentUser.address.substr(
                            currentUser.address.length - 20
                          )}
                        </label>
                      </div>
                      <div className="col-md-6">
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder="Address 2 (Optional)"
                        />
                      </div>
                      <div className="col-md-4">
                        <select className="form-select" required>
                          <option value>-- Country --</option>
                          <option>United States</option>
                          <option>India</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <select className="form-select" required>
                          <option value>-- State --</option>
                          <option>California</option>
                          <option>Washimgton DC</option>
                          <option>Maxico</option>
                          <option>New-Yourk</option>
                          <option>New-Jersy</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Zip"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-header">
                    <FaReceipt className="i-va" size={30} /> Billing Infomation
                    <div className="form-check form-check-inline ml-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Same as Shipping Infomation
                      </label>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder="Addresss"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder="Address 2 (Optional)"
                        />
                      </div>
                      <div className="col-md-4">
                        <select className="form-select" required>
                          <option value>-- Country --</option>
                          <option>United States</option>
                          <option>India </option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <select className="form-select" required>
                          <option value>-- State --</option>
                          <option>California</option>
                          <option>Washimgton DC</option>
                          <option>Maxico</option>
                          <option>New-Yourk</option>
                          <option>New-Jersy</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Zip"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-3 border-info">
                  <div className="card-header bg-info">
                    <BsCreditCard2FrontFill className="i-va" size={30} />{" "}
                    Payment
                  </div>
                  <div className="card-body"></div>
                  <div className="card-footer border-info">
                    <button type="button" className="btn btn-block btn-info">
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">
                    <FaOpencart className="i-va" size={30} /> Cart
                    <span className="badge bg-secondary float-right">3</span>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        {/* <h6 className="my-0">{LocalStorage.Cart.name}</h6> */}
                        <small className="text-muted">Brief description</small>
                      </div>
                      <span className="text-muted">$150</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 className="my-0">Second product</h6>
                        <small className="text-muted">Brief description</small>
                      </div>
                      <span className="text-muted">$12</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 className="my-0">Third item</h6>
                        <small className="text-muted">Brief description</small>
                      </div>
                      <span className="text-muted">$50</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between bg-light">
                      <div className="text-success">
                        <h6 className="my-0">Promo code</h6>
                        <small>EXAMPLECODE</small>
                      </div>
                      <span className="text-success">−$50</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <span>Total (USD)</span>
                      <strong>$162</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  .form-control {
    margin: 0.5rem;
  }
  .form-control.label {
    text-area: auto;
  }
`;

export default CheckoutView;
