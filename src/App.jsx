import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Filter from "./components/filter/Filter";
import Sort from "./components/sort/Sort";
import ProductList from "./components/productList/ProductList";
import {
  filterBySearchTerm,
  filterByColor,
  filterByPriceRange,
} from "./filters";
import styles from "./App.module.scss";
import {
  colors,
  images,
  productNames,
  randomWords,
  descriptionWordCount,
} from "./constants";

const generateRandomDescription = (wordCount) => {
  let description = "";
  for (let i = 0; i < wordCount; i++) {
    const randomIndex = Math.floor(Math.random() * randomWords.length);
    description += randomWords[randomIndex] + " ";
  }
  return description.trim() + ".";
};

const productsArr = Array.from({ length: 10 }, (_, index) => ({
  id: uuidv4(),
  name: productNames[index % productNames.length],
  description: generateRandomDescription(descriptionWordCount),
  price: Math.floor(Math.random() * (9990 - 10 + 1)) + 10,
  color: colors[Math.floor(Math.random() * colors.length)],
  popularity: Math.floor(Math.random() * 100),
  imageUrl: images[Math.floor(Math.random() * images.length)],
  rating: (Math.random() * 5).toFixed(1),
}));

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [activeSort, setActiveSort] = useState("asc");
  const [priceError, setPriceError] = useState("");

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleColorChange = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (value === "" || Number(value) >= 0) {
      setPriceError("");
      name === "minPrice" ? setMinPrice(value) : setMaxPrice(value);
    } else {
      setPriceError("Цена не может быть отрицательной.");
    }
  };

  const filters = [
    (product) => filterBySearchTerm(searchTerm, product),
    (product) => filterByColor(selectedColors, product),
    (product) => filterByPriceRange(minPrice, maxPrice, product),
  ];

  const filteredProducts = productsArr.filter((product) =>
    filters.every((filterFunc) => filterFunc(product))
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (activeSort === "asc") return a.price - b.price;
    if (activeSort === "desc") return b.price - a.price;
    if (activeSort === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div>
      <div className={styles.bg}></div>
      <div className={styles.wrapper}>
        <h1>Список товаров</h1>
        <p style={{ color: "red" }}>{priceError}</p>
        <div className={styles.controls}>
          <div className={styles.sidebar}>
            <Filter
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              colors={colors}
              selectedColors={selectedColors}
              onColorChange={handleColorChange}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              onPriceChange={handlePriceChange}
            />
            <p>Всего продуктов: {sortedProducts.length}</p>
          </div>
          <div className={styles.main}>
            <Sort activeSort={activeSort} setActiveSort={setActiveSort} />
            <ProductList products={sortedProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
