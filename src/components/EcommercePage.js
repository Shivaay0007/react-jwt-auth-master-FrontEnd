// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Axios from "axios";
// // import { useDispatch } from "react-redux";

// const EcommercePage = (props) => {
//   // const dispatch = useDispatch;
//   const [products, setproducts] = useState([]);

//   useEffect(() => {
//     Axios.get(`/product/products=${products}&type=single`).then((response) => {
//       setproducts(response.data[0]);
//     });
//   }, []);

//   return (
//     <div className="App">
//       <section class="section-pagetop bg">
//         <div style={{ display: "flex", justifyContent: "center" }}>
//           <h1>{products}</h1>
//         </div>
//         <div class="container">
//           <nav>
//             <ol class="breadcrumb text">
//               <h2 class="title-page">Category products</h2>
//             </ol>
//           </nav>
//         </div>
//       </section>

//       <section class="section-content padding-y">
//         <div class="container">
//           <div class="row">
//             <aside class="col-md-3">
//               <div class="card">
//                 <article class="filter-group">
//                   <header class="card-header">
//                     <a
//                       href="colaps"
//                       data-toggle="collapse"
//                       data-target="#collapse_1"
//                       aria-expanded="true"
//                       class=""
//                     >
//                       <i class="icon-control fa fa-chevron-down"></i>
//                       <h6 class="title">Product type</h6>
//                     </a>
//                   </header>
//                   <div class="filter-content collapse show" id="collapse_1">
//                     <div class="card-body">
//                       <form class="pb-3">
//                         <div class="input-group">
//                           <input
//                             type="text"
//                             class="form-control"
//                             placeholder="Search"
//                           />
//                           <div class="input-group-append">
//                             <button class="btn btn-light" type="button">
//                               <i class="fa fa-search"></i>
//                             </button>
//                           </div>
//                         </div>
//                       </form>

//                       <ul class="list-menu">
//                         <li>
//                           <a href="abc">People </a>
//                         </li>
//                         <li>
//                           <a href="abc">Watches </a>
//                         </li>
//                         <li>
//                           <a href="abc">Cinema </a>
//                         </li>
//                         <li>
//                           <a href="abc">Clothes </a>
//                         </li>
//                         <li>
//                           <a href="abc">Home items </a>
//                         </li>
//                         <li>
//                           <a href="abc">Animals</a>
//                         </li>
//                         <li>
//                           <a href="abc">People </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </article>
//                 <article class="filter-group">
//                   <header class="card-header">
//                     <a
//                       href="abc"
//                       data-toggle="collapse"
//                       data-target="#collapse_2"
//                       aria-expanded="true"
//                       class=""
//                     >
//                       <i class="icon-control fa fa-chevron-down"></i>
//                       <h6 class="title">Brands </h6>
//                     </a>
//                   </header>
//                   <div class="filter-content collapse show" id="collapse_2">
//                     <div class="card-body">
//                       <label class="custom-control custom-checkbox">
//                         <input type="checkbox" class="custom-control-input" />
//                         <div class="custom-control-label">
//                           Mercedes
//                           <b class="badge badge-pill badge-light float-right">
//                             120
//                           </b>{" "}
//                         </div>
//                       </label>
//                       <label class="custom-control custom-checkbox">
//                         <input type="checkbox" class="custom-control-input" />
//                         <div class="custom-control-label">
//                           Toyota
//                           <b class="badge badge-pill badge-light float-right">
//                             15
//                           </b>{" "}
//                         </div>
//                       </label>
//                       <label class="custom-control custom-checkbox">
//                         <input type="checkbox" class="custom-control-input" />
//                         <div class="custom-control-label">
//                           Mitsubishi
//                           <b class="badge badge-pill badge-light float-right">
//                             35
//                           </b>{" "}
//                         </div>
//                       </label>
//                       <label class="custom-control custom-checkbox">
//                         <input type="checkbox" class="custom-control-input" />
//                         <div class="custom-control-label">
//                           Nissan
//                           <b class="badge badge-pill badge-light float-right">
//                             89
//                           </b>{" "}
//                         </div>
//                       </label>
//                       <label class="custom-control custom-checkbox">
//                         <input type="checkbox" class="custom-control-input" />
//                         <div class="custom-control-label">
//                           Honda
//                           <b class="badge badge-pill badge-light float-right">
//                             30
//                           </b>{" "}
//                         </div>
//                       </label>
//                     </div>
//                   </div>
//                 </article>
//                 <article class="filter-group">
//                   <header class="card-header">
//                     <a
//                       href="abc"
//                       data-toggle="collapse"
//                       data-target="#collapse_3"
//                       aria-expanded="true"
//                       class=""
//                     >
//                       <i class="icon-control fa fa-chevron-down"></i>
//                       <h6 class="title">Price range </h6>
//                     </a>
//                   </header>
//                   <div class="filter-content collapse show" id="collapse_3">
//                     <div class="card-body">
//                       <input
//                         type="range"
//                         class="custom-range"
//                         min="0"
//                         max="100"
//                         name=""
//                       />
//                       <div class="form-row">
//                         <div class="form-group col-md-6">
//                           <label>Min</label>
//                           <input
//                             class="form-control"
//                             placeholder="$0"
//                             type="number"
//                           />
//                         </div>
//                         <div class="form-group text-right col-md-6">
//                           <label>Max</label>
//                           <input
//                             class="form-control"
//                             placeholder="$1,0000"
//                             type="number"
//                           />
//                         </div>
//                       </div>
//                       <button class="btn btn-block btn-primary">Apply</button>
//                     </div>
//                   </div>
//                 </article>
//                 <article class="filter-group">
//                   <header class="card-header">
//                     <a
//                       href="abc"
//                       data-toggle="collapse"
//                       data-target="#collapse_4"
//                       aria-expanded="true"
//                       class=""
//                     >
//                       <i class="icon-control fa fa-chevron-down"></i>
//                       <h6 class="title">Sizes </h6>
//                     </a>
//                   </header>
//                   <div class="filter-content collapse show" id="collapse_4">
//                     <div class="card-body">
//                       <label class="checkbox-btn">
//                         <input type="checkbox" />
//                         <span class="btn btn-light"> XS </span>
//                       </label>

//                       <label class="checkbox-btn">
//                         <input type="checkbox" />
//                         <span class="btn btn-light"> SM </span>
//                       </label>

//                       <label class="checkbox-btn">
//                         <input type="checkbox" />
//                         <span class="btn btn-light"> LG </span>
//                       </label>

//                       <label class="checkbox-btn">
//                         <input type="checkbox" />
//                         <span class="btn btn-light"> XXL </span>
//                       </label>
//                     </div>
//                   </div>
//                 </article>
//                 <article class="filter-group">
//                   <header class="card-header">
//                     <a
//                       href="abc"
//                       data-toggle="collapse"
//                       data-target="#collapse_5"
//                       aria-expanded="false"
//                       class=""
//                     >
//                       <i class="icon-control fa fa-chevron-down"></i>
//                       <h6 class="title">More filter </h6>
//                     </a>
//                   </header>
//                   <div class="filter-content collapse in" id="collapse_5">
//                     <div class="card-body">
//                       <label class="custom-control custom-radio">
//                         <input
//                           type="radio"
//                           name="myfilter_radio"
//                           checked=""
//                           class="custom-control-input"
//                         />
//                         <div class="custom-control-label">Any condition</div>
//                       </label>

//                       <label class="custom-control custom-radio">
//                         <input
//                           type="radio"
//                           name="myfilter_radio"
//                           class="custom-control-input"
//                         />
//                         <div class="custom-control-label">Brand new </div>
//                       </label>

//                       <label class="custom-control custom-radio">
//                         <input
//                           type="radio"
//                           name="myfilter_radio"
//                           class="custom-control-input"
//                         />
//                         <div class="custom-control-label">Used items</div>
//                       </label>

//                       <label class="custom-control custom-radio">
//                         <input
//                           type="radio"
//                           name="myfilter_radio"
//                           class="custom-control-input"
//                         />
//                         <div class="custom-control-label">Very old</div>
//                       </label>
//                     </div>
//                   </div>
//                 </article>
//               </div>
//             </aside>
//             <main class="col-md-9">
//               <header class="border-bottom mb-4 pb-3">
//                 <div class="form-inline">
//                   <span class="mr-md-auto">32 Items found </span>
//                   <select class="mr-2 form-control">
//                     <option>Latest items</option>
//                     <option>Trending</option>
//                     <option>Most Popular</option>
//                     <option>Cheapest</option>
//                   </select>
//                   <div class="btn-group">
//                     <a
//                       href="abc"
//                       class="btn btn-outline-secondary"
//                       data-toggle="tooltip"
//                       title="List view"
//                     >
//                       <i class="fa fa-bars"></i>
//                     </a>
//                     <a
//                       href="abc"
//                       class="btn  btn-outline-secondary active"
//                       data-toggle="tooltip"
//                       title="Grid view"
//                     >
//                       <i class="fa fa-th"></i>
//                     </a>
//                   </div>
//                 </div>
//               </header>

//               <div class="row">
//                 <div class="col-md-4">
//                   <figure class="card card-product-grid">
//                     <div class="img-wrap">
//                       <span class="badge badge-danger"> NEW </span>
//                       <img src="assets/images/items/1.jpg" />
//                       <a class="btn-overlay" href="#">
//                         <i class="fa fa-search-plus"></i> Quick view
//                       </a>
//                     </div>
//                     <figcaption class="info-wrap">
//                       <div class="fix-height">
//                         <a href="abc" class="title">
//                           Great item name goes here
//                         </a>
//                         <div class="price-wrap mt-2">
//                           <span class="price">$1280</span>
//                           <del class="price-old">$1980</del>
//                         </div>
//                       </div>
//                       <a href="abc" class="btn btn-block btn-primary">
//                         <Link to="/SingleProductPage">Add to cart </Link>
//                       </a>
//                     </figcaption>
//                   </figure>
//                 </div>

//                 <div class="col-md-4">
//                   <figure class="card card-product-grid">
//                     <div class="img-wrap">
//                       <img src="assets/images/items/2.jpg" />
//                       <a class="btn-overlay" href="abc">
//                         <i class="fa fa-search-plus"></i> Quick view
//                       </a>
//                     </div>
//                     <figcaption class="info-wrap">
//                       <div class="fix-height">
//                         <a href="abc" class="title">
//                           Product name goes here just for demo item
//                         </a>
//                         <div class="price-wrap mt-2">
//                           <span class="price">$1280</span>
//                         </div>
//                       </div>
//                       <a href="abc" class="btn btn-block btn-primary">
//                         Add to cart{" "}
//                       </a>
//                     </figcaption>
//                   </figure>
//                 </div>

//                 <div class="col-md-4">
//                   <figure class="card card-product-grid">
//                     <div class="img-wrap">
//                       <img src="assets/images/items/3.jpg" />
//                       <a class="btn-overlay" href="abc">
//                         <i class="fa fa-search-plus"></i> Quick view
//                       </a>
//                     </div>
//                     <figcaption class="info-wrap">
//                       <div class="fix-height">
//                         <a href="abc" class="title">
//                           Product name goes here just for demo item
//                         </a>
//                         <div class="price-wrap mt-2">
//                           <span class="price">$1280</span>
//                         </div>
//                       </div>
//                       <a href="abc" class="btn btn-block btn-primary">
//                         Add to cart{" "}
//                       </a>
//                     </figcaption>
//                   </figure>
//                 </div>

//                 <div class="col-md-4">
//                   <figure class="card card-product-grid">
//                     <div class="img-wrap">
//                       <img src="assets/images/items/4.jpg" />
//                       <a class="btn-overlay" href="abc">
//                         <i class="fa fa-search-plus"></i> Quick view
//                       </a>
//                     </div>
//                     <figcaption class="info-wrap">
//                       <div class="fix-height">
//                         <a href="abc" class="title">
//                           Product name goes here just for demo item
//                         </a>
//                         <div class="price-wrap mt-2">
//                           <span class="price">$1280</span>
//                         </div>
//                       </div>
//                       <a href="abc" class="btn btn-block btn-primary">
//                         Add to cart{" "}
//                       </a>
//                     </figcaption>
//                   </figure>
//                 </div>

//                 <div class="col-md-4">
//                   <figure class="card card-product-grid">
//                     <div class="img-wrap">
//                       <img src="assets/images/items/5.jpg" />
//                       <a class="btn-overlay" href="abc">
//                         <i class="fa fa-search-plus"></i> Quick view
//                       </a>
//                     </div>
//                     <figcaption class="info-wrap">
//                       <div class="fix-height">
//                         <a href="abc" class="title">
//                           Product name goes here just for demo item
//                         </a>
//                         <div class="price-wrap mt-2">
//                           <span class="price">$1280</span>
//                         </div>
//                       </div>
//                       <a href="abc" class="btn btn-block btn-primary">
//                         Add to cart{" "}
//                       </a>
//                     </figcaption>
//                   </figure>
//                 </div>

//                 <div class="col-md-4">
//                   <figure class="card card-product-grid">
//                     <div class="img-wrap">
//                       <img src="assets/images/items/6.jpg" />
//                       <a class="btn-overlay" href="abc">
//                         <i class="fa fa-search-plus"></i> Quick view
//                       </a>
//                     </div>
//                     <figcaption class="info-wrap">
//                       <div class="fix-height">
//                         <a href="abc" class="title">
//                           Product name goes here just for demo item
//                         </a>
//                         <div class="price-wrap mt-2">
//                           <span class="price">$1280</span>
//                         </div>
//                       </div>
//                       <a href="abc" class="btn btn-block btn-primary">
//                         Add to cart{" "}
//                       </a>
//                     </figcaption>
//                   </figure>
//                 </div>

//                 <div class="col-md-4">
//                   <figure class="card card-product-grid">
//                     <div class="img-wrap">
//                       <img src="assets/images/items/7.jpg" />
//                       <a class="btn-overlay" href="abc">
//                         <i class="fa fa-search-plus"></i> Quick view
//                       </a>
//                     </div>
//                     <figcaption class="info-wrap">
//                       <div class="fix-height">
//                         <a href="abc" class="title">
//                           Product name goes here just for demo item
//                         </a>
//                         <div class="price-wrap mt-2">
//                           <span class="price">$1280</span>
//                         </div>
//                       </div>
//                       <a href="abc" class="btn btn-block btn-primary">
//                         Add to cart{" "}
//                       </a>
//                     </figcaption>
//                   </figure>
//                 </div>
//                 <div class="col-md-4">
//                   <figure class="card card-product-grid">
//                     <div class="img-wrap">
//                       <img src="assets/images/items/1.jpg" />
//                       <a class="btn-overlay" href="abc">
//                         <i class="fa fa-search-plus"></i> Quick view
//                       </a>
//                     </div>
//                     <figcaption class="info-wrap">
//                       <div class="fix-height">
//                         <a href="abc" class="title">
//                           Product name goes here just for demo item
//                         </a>
//                         <div class="price-wrap mt-2">
//                           <span class="price">$1280</span>
//                         </div>
//                       </div>
//                       <a href="abc" class="btn btn-block btn-primary">
//                         Add to cart{" "}
//                       </a>
//                     </figcaption>
//                   </figure>
//                 </div>
//               </div>

//               <nav class="mt-4" aria-label="Page navigation sample">
//                 <ul class="pagination">
//                   <li class="page-item disabled">
//                     <a class="page-link" href="abc">
//                       Previous
//                     </a>
//                   </li>
//                   <li class="page-item active">
//                     <a class="page-link" href="abc">
//                       1
//                     </a>
//                   </li>
//                   <li class="page-item">
//                     <a class="page-link" href="abc">
//                       2
//                     </a>
//                   </li>
//                   <li class="page-item">
//                     <a class="page-link" href="abc">
//                       3
//                     </a>
//                   </li>
//                   <li class="page-item">
//                     <a class="page-link" href="abc">
//                       Next
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//             </main>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default EcommercePage;

import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Axios from "axios";
const EcommercePage = ({}) => {
  // const id = useParams();
  const url = "http://localhost:8080/product";
  // const url = "https://course-api.com/react-store-products";
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
      .catch(() => {
        setproducts({
          loading: false,
          data: null,
          error: false,
        });
      });
  }, [url]);

  let content = null;
  if (products.error) {
    content = <p>There was an error pls Refresh and try again letter...</p>;
  }

  return (
    <div>
      {products?.data &&
        products.data.map((content, key) => {
          console.log("products printed", content);
          return (
            <>
              <h1>Best Seller </h1>

              {/* <img src={product.data.image} alt={product.data.name} />
      <p>{product.data.price}</p> */}
              <div className=" card border mb-4 rounded overflow-hidden shedow">
                <img src={content.image} alt="img" />
                Name : {content.name}
                <br />
                Description : {content.description}
                <br />
                Company : {content.company}
                <br />
                Price : {content.price}
                <br />
                Category : {content.category}
              </div>
            </>
          );
        })}
    </div>
  );
};
export default EcommercePage;
