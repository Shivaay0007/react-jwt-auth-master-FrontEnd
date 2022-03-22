import React, { useEffect, useState } from "react";
import AddToCart from "./AddToCart";
import Axios from "axios";

import styled from "styled-components";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const SingleProductPage = ({ contentSetter, pId }) => {
  const url = `http://localhost:8080/product/${pId}`;

  const [products, setproducts] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    // so that our pId do not get updated if page reloads
    if (pId) {
      Cookies.set("productid", pId);
    }
    console.log("productid ", Cookies.get("productid"));
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
    Axios.get(url)
      .then((response) => {
        setproducts({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setproducts({
          loading: false,
          data: null,
          error: false,
        });
      });
  }, []);

  let content = null;
  if (products.error) {
    content = <p>There was an error pls Refresh and try again letter...</p>;
  }
  return (
    <Wrapper>
      {/* <PageHero title={content.id} /> */}
      {products?.data &&
        products.data.map((content, key) => {
          // console.log("products printed", content);
          return (
            <>
              <div className="section section-center page">
                <Link to="/products" className="btn">
                  back to products
                </Link>
                <div className="product-center">
                  <img src={content.image} />
                  <section className="content">
                    <h2>{content.name}</h2>
                    {/* <Stars stars={stars} reviews={reviews} /> */}
                    <h5 className="price"> {content.price}</h5>
                    <p className="desc"> {content.description}</p>
                    <p className="info">
                      <span>Available : </span>
                      {/* {content.stock > 0 ? "In stock" : "Out of stock"} */}
                    </p>
                    <p className="info">
                      <span>SKU : </span>
                      {content.sku}
                    </p>
                    <p className="info">
                      <span>Brand : </span>
                      {content.company}
                    </p>
                    <hr />
                    {content.stock > 0 && <AddToCart product={content.product} />}
                  </section>
                </div>
              </div>
            </>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.main`
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
