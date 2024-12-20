import React from "react";
import ProductCard from "../productCard/ProductCard";
import styles from "./ProductList.module.scss";

const ProductList = ({ products }) => {
  return (
    <div className={styles.productContainer}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
