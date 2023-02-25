import React from "react";

const Products = ({ title, price, image, rating }) => {
  // console.log(props);
  return (
    <div className="card">
      <img src={image} />
      <p>{title}</p>
      <p>${price}</p>
      <p>{rating.rate}</p>
    </div>
  );
};

export default Products;

//(props)
// props= {
//   name:length,
//   price:23
// }

// return (
//   <h1>{props.name}</h1>
// )
