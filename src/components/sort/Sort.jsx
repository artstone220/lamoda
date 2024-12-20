import React from "react";
import styles from "./Sort.module.scss";

const Sort = ({ activeSort, setActiveSort }) => {
  return (
    <div className={styles.sort}>
      <button
        onClick={() => setActiveSort("asc")}
        className={activeSort === "asc" ? styles.active : ""}
      >
        По возрастанию цены
      </button>
      <button
        onClick={() => setActiveSort("desc")}
        className={activeSort === "desc" ? styles.active : ""}
      >
        По убыванию цены
      </button>
      <button
        onClick={() => setActiveSort("rating")}
        className={activeSort === "rating" ? styles.active : ""}
      >
        По рейтингу
      </button>
    </div>
  );
};

export default Sort;
