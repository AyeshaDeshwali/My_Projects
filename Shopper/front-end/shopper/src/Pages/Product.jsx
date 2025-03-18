import React, { useContext } from "react";
import "./Product.css";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  console.log("All Products:", all_product);

  // Ensure the product is returned correctly
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="">
      {/* Passing product only if found */}
      {product ? (
        <Breadcrums product={product} />
      ) : (
        <div>Product not found</div>
      )}
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

export default Product;
