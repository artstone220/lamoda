import React from "react";
import styles from "./Filter.module.scss";

const Filter = ({
  searchTerm,
  onSearchChange,
  colors,
  selectedColors,
  onColorChange,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  onPriceChange,
}) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Поиск..."
      />
      <h3>Цвет</h3>
      {colors.map((color) => (
        <label key={color}>
          <input
            type="checkbox"
            checked={selectedColors.includes(color)}
            onChange={() => onColorChange(color)}
          />
          {color}
        </label>
      ))}
      <h3>Цена</h3>
      <div className={styles.priceRange}>
        <input
          type="number"
          name="minPrice"
          value={minPrice}
          onChange={onPriceChange}
          placeholder="От"
        />
        <input
          type="number"
          name="maxPrice"
          value={maxPrice}
          onChange={onPriceChange}
          placeholder="До"
        />
      </div>
    </div>
  );
};

export default Filter;
