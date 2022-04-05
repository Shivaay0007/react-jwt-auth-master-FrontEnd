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
import { formatPrice } from "../utils/helpers";

class CheckoutView extends Component {
  constructor(props) {
    super();
    this.state = {
      currentUser: AuthService.getCurrentUser(),
      LocalStorageforCheckout: JSON.parse(localStorage.getItem("Cart")),
    };
  }

  render() {
    const { currentUser } = this.state;
    const { LocalStorageforCheckout } = this.state;
    // console.log("localstorage", LocalStorage);

    let ourTotalPrice = 0;

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
                  <div className="card-header bg-info">
                    <FaEnvelopeOpenText className="i-va" size={30} /> Contact
                    Info
                  </div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          aria-label="Email Address"
                        >
                          {currentUser.email}
                        </label>
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
                  <div className="card-header bg-info">
                    <FaTruckMoving className="i-va" size={30} /> Shipping
                    Infomation
                  </div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-md-12">
                        <label
                          type="text"
                          className="form-control address"
                          placeholder="Name"
                          required
                        >
                          {currentUser.username}
                        </label>
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
                  <div className="card-header bg-info">
                    <FaReceipt className="i-va" size={30} /> Billing Infomation
                  </div>
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
                    <span className="badge bg-secondary float-right">
                      Product Count : {LocalStorageforCheckout?.length}
                    </span>
                  </div>
                  <ul className="list-group list-group-flush">
                    {LocalStorageforCheckout.map((Cart) => {
                      ourTotalPrice = ourTotalPrice + Cart.price;

                      return (
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                          <div>
                            <h6 className="my-0">{Cart?.name}</h6>
                            <small className="text-muted">
                              Brief description
                            </small>
                          </div>
                          <span className="text-muted">
                            {formatPrice(Cart?.price)}
                          </span>
                        </li>
                      );
                    })}
                    <li className="list-group-item d-flex justify-content-between bg-light">
                      <div className="text-success">
                        <h6 className="my-0">Promo code</h6>
                        <small>EXAMPLECODE</small>
                      </div>
                      <span className="text-success">-$50</span>
                    </li>
                    {/* {LocalStorage.map((Cart) => { */}

                    <li className="list-group-item d-flex justify-content-between">
                      <span>Total (USD)</span>
                      <strong>{formatPrice(ourTotalPrice)}</strong>
                    </li>

                    {/* })} */}
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
