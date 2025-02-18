import React from "react";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ mensaje }) => {
  return (
    <div className={styles.container}>
      <h2>{mensaje}</h2>
    </div>
  );
};

export default ItemListContainer;
