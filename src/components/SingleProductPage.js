import React, { useEffect, useState } from "react";
// import AddToCart from "./AddToCart";
import Axios from "axios";
import { formatPrice } from "../utils/helpers";

import styled from "styled-components";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const SingleProductPage = ({ contentSetter, pId }) => {
  const url = `http://localhost:8080/product/${
    pId || Cookies.get("productid")
  }`;

  const [products, setproducts] = useState({
    loading: false,
    data: [],
    error: false,
  });

  useEffect(() => {
    // so that our pId do not get updated if page reloads
    if (pId) {
      Cookies.set("productid", pId);
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
      Axios.get(url)
        .then((response) => {
          setproducts((preState) => ({
            ...preState,

            data: response.data,
          }));
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
      <>
        {products && products.data && products.data[0] ? (
          <div className="section section-center page">
            <Link to="/products" className="btn">
              back to products
            </Link>
            <div className="product-center">
              <img src={products.data[0].image} alt="img" />
              <section className="content">
                <h2>{products.data[0].name}</h2>
                {/* <Stars stars={stars} reviews={reviews} /> */}
                <h5 className="price">{formatPrice(products.data[0].price)}</h5>
                <p className="desc"> {products.data[0].description}</p>
                <p className="info">
                  <span>Available : </span>
                  {/* {content.stock > 0 ? "In stock" : "Out of stock"} */}
                </p>
                <p className="info">
                  <span>SKU : </span>
                  {products.data[0].sku}
                </p>
                <p className="info">
                  <span>Brand : </span>
                  {products.data[0].company}
                </p>
                <hr />
                <div>
                  <Link to="/AddToCart" className="btn">
                    Add TO Cart
                  </Link>
                  {
                    // {<AddToCart product={products.data[0].product} />}
                  }
                </div>
              </section>
            </div>
          </div>
        ) : (
          <p>No Product Found</p>
        )}
      </>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .section.section-center.page {
    margin-top: 0.1rem;
  }
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
