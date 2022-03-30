import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Axios from "axios";
// import AuthService from "../services/auth.service";
// import userService from "../services/user.service";

// import { FaCheck } from "react-icons/fa";
// import AmountButtons from "./AmountButtons";

const AddToCart = ({ pId }) => {
  const LocalStorage = JSON.parse(localStorage.getItem("user"));
  const LocalStorageCart = localStorage.getItem("Cart");

  const url = `http://localhost:8080/cart/${LocalStorage?.id}`;

  //   const currentUser = AuthService.getCurrentUser();
  const [products, setproducts] = useState({
    loading: false,
    data: [],
    error: false,
  });

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
      {
        <div className="card">
          <img
            src={LocalStorageCart?.image}
            alt="Image is not available at this time"
          />
          <br />
          <div className="colors">
            <span> Name : {LocalStorageCart?.name}</span>
            <span> price : {LocalStorageCart?.price}</span>
          </div>
        </div>
      }
      <div className="btn-container">
        {/* <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        /> */}
        <Link
          to="/cart"
          className="btn"
          // onClick={() => addToCart(id, mainColor, amount, product)}
        >
          CheckOut
        </Link>
      </div>
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
