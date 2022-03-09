// import React from "react";
// // import { useFilterContext } from "../context/filter_context";
// // import GridView from "./GridView";
// // import { useState } from "react";
// import {
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardImage,
//   MDBCardBody,
//   MDBBadge,
// } from "mdbreact";

// const ProductList = () => {
//   // const { filtered_products: products, grid_view } = useState();

//   // if (grid_view === false) {
//   //   return;
//   // }
//   return (
//     <div>
//       <section className="text-center my-5">
//         <h2 className="h1-responsive font-weight-bold text-center my-5">
//           Our bestsellers
//         </h2>
//         <p className="grey-text text-center w-responsive mx-auto mb-5">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
//           amet numquam iure provident voluptate esse quasi, veritatis totam
//           voluptas nostrum quisquam eum porro a pariatur veniam.
//         </p>
//         <MDBRow>
//           <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
//             <MDBCard className="align-items-center">
//               <MDBCardImage
//                 src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.webp"
//                 top
//                 alt="sample photo"
//                 overlay="white-slight"
//               />
//               <MDBCardBody className="text-center">
//                 <a href="#!" className="grey-text">
//                   <h5>Shirt</h5>
//                 </a>
//                 <h5>
//                   <strong>
//                     <a href="#!" className="dark-grey-text">
//                       Denim shirt{" "}
//                       <MDBBadge pill color="danger">
//                         NEW
//                       </MDBBadge>
//                     </a>
//                   </strong>
//                 </h5>
//                 <h4 className="font-weight-bold blue-text">
//                   <strong>120$</strong>
//                 </h4>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//           <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
//             <MDBCard className="align-items-center">
//               <MDBCardImage
//                 src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.webp"
//                 top
//                 alt="sample photo"
//                 overlay="white-slight"
//               />
//               <MDBCardBody className="text-center">
//                 <a href="#!" className="grey-text">
//                   <h5>Sport wear</h5>
//                 </a>
//                 <h5>
//                   <strong>
//                     <a href="#!" className="dark-grey-text">
//                       Sweatshirt
//                     </a>
//                   </strong>
//                 </h5>
//                 <h4 className="font-weight-bold blue-text">
//                   <strong>139$</strong>
//                 </h4>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//           <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
//             <MDBCard className="align-items-center">
//               <MDBCardImage
//                 src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.webp"
//                 top
//                 alt="sample photo"
//                 overlay="white-slight"
//               />
//               <MDBCardBody className="text-center">
//                 <a href="#!" className="grey-text">
//                   <h5>Sport wear</h5>
//                 </a>
//                 <h5>
//                   <strong>
//                     <a href="#!" className="dark-grey-text">
//                       Grey blouse{" "}
//                       <MDBBadge pill color="primary">
//                         BEST
//                       </MDBBadge>
//                     </a>
//                   </strong>
//                 </h5>
//                 <h4 className="font-weight-bold blue-text">
//                   <strong>99$</strong>
//                 </h4>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//           <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
//             <MDBCard className="align-items-center">
//               <MDBCardImage
//                 src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.webp"
//                 top
//                 alt="sample photo"
//                 overlay="white-slight"
//               />
//               <MDBCardBody className="text-center">
//                 <a href="#!" className="grey-text">
//                   <h5>Outwear</h5>
//                 </a>
//                 <h5>
//                   <strong>
//                     <a href="#!" className="dark-grey-text">
//                       Black jacket
//                     </a>
//                   </strong>
//                 </h5>
//                 <h4 className="font-weight-bold blue-text">
//                   <strong>219$</strong>
//                 </h4>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </section>
//     </div>
//   );
// };
// export default ProductList;
import React, { PureComponent } from "react";

export default class ProductList extends PureComponent {
  render() {
    return <div>ProductList</div>;
  }
}
