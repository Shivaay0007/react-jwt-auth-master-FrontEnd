import React, { useState, useEffect } from "react";
// import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Axios from "axios";
import Product from "./Product";
// import Error from "./Error";
// import Loading from "./Loading";
// import Product from "./Product";

const FeaturedProducts = () => {
  const url = "http://localhost:8080/product";

  const [products, setproducts] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setproducts({
      loading: false,
      data: null,
      error: false,
    });
    Axios.get(url)
      .then((response) => {
        // console.log("responce of data", response);
        setproducts({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch((error) => {
        console.log("error", error);
        setproducts({
          loading: false,
          data: null,
          error: false,
        });
      });
  }, []);

  if (!products) {
    // console.log("products ===>", products);
    return <h1> Error while loding products...</h1>;
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {products?.data?.slice(7, 10).map((product) => {
          return <Product key={product.id} {...product} />;
          // return <h4>Our products...</h4>;
        })}
      </div>
      <Link to="/products" className="btn">
        all products
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem -2.75rem;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
