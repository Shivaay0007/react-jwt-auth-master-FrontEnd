import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaOpencart } from "react-icons/fa";
import { RiHeart3Fill } from "react-icons/ri";
import { ImEye } from "react-icons/im";

import { Link } from "react-router-dom";
import Axios from "axios";
const EcommercePage = ({ GetSingleProductId }) => {
  // const id = useParams();
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

  let content = null;
  if (products.error) {
    content = <p>There was an error pls Refresh and try again letter...</p>;
  }

  return (
    <div>
      <h1>Best Seller </h1>

      <Wrapper>
        <div className="products-container">
          {products?.data &&
            products.data.map((content, key) => {
              // console.log("products printed", content);
              return (
                <>
                  <div className=" card border mb-4 rounded overflow-hidden shedow ">
                    <img src={content.image} alt="img" />
                    <br />
                    Name : {content.name}
                    <br />
                    {/* Description : {content.description} */}
                    {/* <br /> */}
                    {/* Company : {content.company}
                    <br /> */}
                    Price : {content.price}
                    <br />
                    Category : {content.category}
                    <br />
                    <br />
                    <div
                      className="div"
                      onClick={() => {
                        GetSingleProductId(content.id);
                        console.log("conntent", content.id);
                      }}
                    >
                      <Link to={"/SingleProductPage"}>
                        {/* <FcViewDetails size={40} /> */}
                        <ImEye
                          size={30}
                          color="Lightgrey"
                          onMouseOver={({ target }) => (target.style.color = "blue")}
                          onMouseOut={({ target }) => (target.style.color = "Lightgrey")}
                        />
                      </Link>

                      <Link to={"/AddTOCart"}>
                        <FaOpencart size={40} className="cart" />
                      </Link>
                      <RiHeart3Fill className="heart" size={25} />
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  img {
    height: 145px;
    width: 200px;
  }
  .card {
    padding: 20px 25px 30px;
  }
  .cart {
    margin-left: 1rem;
  }
  .heart {
    font-size: 35px;
    color: rgb(182, 173, 173);
    width: 70px;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      color: rgb(192, 39, 39);
      text: Add to Wishlist;
    }
  }
  .products-container {
    display: grid;
    gap: 0.5rem 0.5rem;
  }
  // .div {
  //   margin: 0.5rem;
  //   margin-right: 16px;
  //   // text-transform: uppercase;
  //   // background: var(--clr-primary-5);
  //   // color: var(--clr-primary-10);
  //   padding: 0.375rem 0.75rem;
  //   // letter-spacing: var(--spacing);
  //   // button-spacing: var(--spacing);
  //   display: inline-block;
  //   // font-weight: 300;
  //   transition: var(--transition);
  //   font-size: 0.875rem;
  //   cursor: pointer;
  //   // box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  //   // border-radius: var(--radius);
  //   // border-color: transparent;
  //   gap: 0.5rem;
  // }
  p {
    text-decoration: none;
    color: #ffffff;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
export default EcommercePage;
