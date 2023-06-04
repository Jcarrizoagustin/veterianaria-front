import React from "react";
import styles from "./PetSearchComponent.module.css";
function PetSearchComponent() {
  return (
    <div className={styles.container}>
      <input type="text" />
      <select name="cars" id="cars" form="carform">
        <option value="volvo">Perro</option>
        <option value="saab">Gato</option>
        <option value="opel">Loro</option>
        <option value="audi">Conejo</option>
      </select>
    </div>
  );
}

export default PetSearchComponent;
