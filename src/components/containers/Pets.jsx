import React from "react";
import styles from "./Pets.module.css";
import PetsListContainer from "./PetsListContainer";
import Button from "../buttons/Button";
import PetSearchComponent from "../search/PetSearchComponent";
function Pets() {
  return (
    <div className={styles.container}>
      <PetSearchComponent />
      <PetsListContainer />
      <Button
        text={"Confirmar"}
        handleClick={() => console.log("Btn test")}
        bg={"#4831D4"}
      />
    </div>
  );
}

export default Pets;
