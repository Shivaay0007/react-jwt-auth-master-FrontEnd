import React from "react";
import { MDBCard } from "mdbreact";

const ProductCard = ({ product }) => {
  return (
    <MDBCard
      image={product.media.source}
      header={product.name}
      meta={product.price.formatted_with_symbol}
      description={product.description.replace(/(<([^>]+)>)/gi, "")}
    />
  );
};
export default ProductCard;
