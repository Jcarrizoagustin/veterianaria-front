import PetCard from "../pets/PetCard";
import styles from "./PetsListContainer.module.css";

function PetsListContainer() {
  return (
    <div className={styles.container}>
      <PetCard />
      <PetCard />
      <PetCard />
    </div>
  );
}

export default PetsListContainer;
