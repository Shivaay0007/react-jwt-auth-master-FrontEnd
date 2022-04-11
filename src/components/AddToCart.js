import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsHeartFill, BsFillTrashFill } from "react-icons/bs";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { FaTruckMoving } from "react-icons/fa";
import { TiMinus, TiPlus } from "react-icons/ti";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Axios from "axios";
import AuthService from "../services/auth.service";
import { formatPrice } from "../utils/helpers";
// import userService from "../services/user.service";

const AddToCart = ({ pId }) => {
  const LocalStorage = JSON.parse(localStorage.getItem("user"));
  const [userCartDataFromLocalStorage, setuserCartDataFromLocalStorage] =
    useState([]);

  const url = `http://localhost:8080/cart/${LocalStorage?.id}`;

  const currentUser = AuthService.getCurrentUser();
  const [count, setCount] = useState(0);
  const [products, setproducts] = useState({
    loading: false,
    data: [],
    error: false,
  });

  const [ParemId, setParemId] = useState("");
  const [CurrentQuantity, setCurrentQuantity] = useState([
    {
      id: 0,
      productQuantity: 0,
    },
  ]);

  let cartItem = [];
  let cartItemId = [];

  let ourTotalPrice = 0;

  useEffect(() => {
    // setuserCartDataFromLocalStorage(
    //   JSON.parse(localStorage.getItem("Cart")) || []
    // );
    const LocalStorageData = JSON.parse(localStorage.getItem("Cart")) || [];
    // console.log("sd,mvbkjvkeubkjsfb", LocalStorageData);

    LocalStorageData.map((Cart) => {
      if (cartItemId.indexOf(Cart.id) < 0) {
        console.log("cart item id is printed", Cart.id);

        Cart["qty"] = 1;
        cartItemId.push(Cart.id);
        cartItem.push(Cart);
      } else {
        const tempIndexOfCurrentItem = cartItemId.indexOf(Cart.id);
        cartItem[tempIndexOfCurrentItem].qty += 1;
        cartItem[tempIndexOfCurrentItem].price += Cart.price;
      }
    });

    setuserCartDataFromLocalStorage(cartItem);
    // console.log("sd,mvbkjvkeubkjsfb", cartItem);
  }, [ParemId]);

  const removePurchasedPFromCart = (paramId) => {
    const LocalStorageCart = JSON.parse(localStorage.getItem("Cart")) || [];

    var index = LocalStorageCart.map((x) => {
      return x.id;
    }).indexOf(paramId);

    LocalStorageCart.splice(index, 1);

    localStorage.setItem("Cart", JSON.stringify(LocalStorageCart));
    setParemId(paramId + Math.random());
  };
  const removePurchasedPItemFromCart = (paramId) => {
    const LocalStorageItemCart = JSON.parse(localStorage.getItem("Cart")) || [];

    var index = LocalStorageItemCart.map((x) => {
      return x.id;
    }).indexOf(paramId);

    LocalStorageItemCart.splice(index, 1);

    localStorage.setItem("Cart", JSON.stringify(LocalStorageItemCart));
    setParemId(paramId);
  };
  // This function is for  remove entire product from cart
  // const removeMultipleItem = (paramId) => {
  //   const whichItemToRemove = [paramId];

  //   const restCartItem = paramId.filter(
  //     (value) => !whichItemToRemove.includes(value)
  //   );
  //   localStorage.setItem("Cart", JSON.stringify(restCartItem));
  // };

  let LocalStorageCart = [];

  const increaseCount = (singleProductqty) => {
    // return setCount(count + 1);

    setParemId(singleProductqty.id + Math.random());

    LocalStorageCart = JSON.parse(localStorage.getItem("Cart")) || [];
    LocalStorageCart.push(singleProductqty);
    localStorage.setItem("Cart", JSON.stringify(LocalStorageCart));
  };

  //   const LocalStorage = localStorage.getItem("user");

  useEffect(() => {
    // so that our pId do not get updated if page reloads
    if (pId) {
      Cookies.set("productid", pId);
      //   console.log("pid is generated", pId);
    }
  }, []);

  useEffect(() => {
    setproducts(
      {
        loading: false,
        data: null,
        error: false,
      },
      []
    );
    if (pId || Cookies.get("productid")) {
      Axios.post(
        url,
        { data: {} },
        {
          headers: {
            "x-access-token": LocalStorage?.accessToken,
          },
        }
      )
        .then((response) => {
          setproducts((preState) => ({
            ...preState,

            data: response.data,
          }));
          // console.log("access token", LocalStorage?.accessToken);
        })
        .catch(() => {
          setproducts({
            loading: false,
            data: null,
            error: false,
          });
        });
    }
  }, []);

  let content = null;
  if (products.error) {
    content = <p>There was an error pls Refresh and try again letter...</p>;
  }
  return (
    <Wrapper>
      {/* <Link to="/products" className="btn">
        back to products
      </Link> */}

      <div className="container mb-3">
        <div className="row">
          <div className="col-md-9">
            <div className="card">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width={120}>
                        Quantity
                      </th>
                      <th scope="col" width={150}>
                        Price
                      </th>
                      <th scope="col" className="text-right" width={130}></th>
                    </tr>
                  </thead>
                  {userCartDataFromLocalStorage.map((Cart) => {
                    ourTotalPrice = ourTotalPrice + Cart.price;

                    return (
                      <tbody>
                        <tr>
                          <td>
                            <div className="row">
                              <div className="col-3 d-none d-md-block">
                                <img
                                  src={Cart.image}
                                  width="80"
                                  alt="Image is not loaded"
                                />
                              </div>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <div className="col">
                                <Link
                                  to="/SingleProductPage"
                                  className="text-decoration-none"
                                >
                                  {Cart.name}
                                </Link>
                                <p className="small text-muted">
                                  Size: XL, <strong>Brand:</strong>
                                  {Cart.company}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="input-group input-group-sm mw-140">
                              <button
                                className="btn btn-primary text-white"
                                type="button"
                                onClick={() =>
                                  removePurchasedPFromCart(Cart.id)
                                }
                              >
                                <TiMinus />
                              </button>
                              <text
                                type="text"
                                className="form-control"
                                defaultValue={Cart.qty}
                              >
                                {Cart.qty}
                              </text>
                              <button
                                className="btn btn-primary text-white"
                                type="button"
                                onClick={() => increaseCount(Cart)}
                              >
                                <TiPlus />
                              </button>
                            </div>
                          </td>
                          <td>
                            <var className="price">
                              {formatPrice(Cart.price)}
                            </var>
                            <small className="d-block text-muted">
                              {/* $79.00 each */}
                              {formatPrice(Cart.price / Cart.qty)}
                            </small>
                          </td>
                          <td className="text-right">
                            <button className="btn btn-sm  mr-2">
                              <BsHeartFill className="i-va" />
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                              <BsFillTrashFill
                                className="i-va"
                                onClick={() =>
                                  removePurchasedPItemFromCart(Cart.id)
                                }
                              />
                            </button>
                          </td>
                        </tr>
                        <hr color="black" />
                      </tbody>
                    );
                  })}
                </table>
              </div>
              <div className="card-footer">
                <Link to="/checkout" className="btn btn-primary float-right">
                  CheckOut <BiChevronRight className="i-va" />
                </Link>
                <Link to="/products" className="btn btn-secondary">
                  <BiChevronLeft className="i-va" /> Continue Shopping
                </Link>
              </div>
            </div>
            <div className="alert alert-success mt-3">
              <p className="m-0">
                <FaTruckMoving className="i-va mr-2" /> Free Delivery within 1-2
                weeks
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-3">{currentUser.username}</div>
            <div className="card">
              <div className="card-body">
                <dl className="row border-bottom">
                  {/* <dt className="col-6">Total price:</dt>
                  <dd className="col-6 text-right">$1,568</dd>

                  <dt className="col-6 text-success">Discount:</dt>
                  <dd className="col-6 text-success text-right">-$58</dd>
                  <dt className="col-6 text-success">Coupon: </dt>
                  <dd className="col-6 text-success text-right">-$68</dd> */}
                </dl>
                <dl className="row">
                  <dt className="col-6">Total:</dt>
                  <dd className="col-6 text-right h6">
                    <strong>{formatPrice(ourTotalPrice)}</strong>
                  </dd>
                </dl>
                <hr />
                <p className="text-center">
                  <img
                    src="../../images/payment/payments.webp"
                    alt="..."
                    height={26}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {userCartDataFromLocalStorage.map((Cart) => {
        return (
          <div className="card">
            <img src={Cart.image} alt="Image is not available at this time" />
            <br />
            <div className="colors">
              <span> Name : {Cart.name}</span>
              <span> price : {Cart.price}</span>
            </div>
          </div>
        );
      })} */}
      {/* <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          CheckOut
        </Link>
      </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .card {
  }
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 180px;
  }
`;
export default AddToCart;
