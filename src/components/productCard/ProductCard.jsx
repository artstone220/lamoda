import React from "react";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.product}>
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Цена: {product.price} byn</p>
      <p>Цвет: {product.color}</p>
      <p>Рейтинг: {product.rating} ⭐</p>
    </div>
  );
};

export default ProductCard;
