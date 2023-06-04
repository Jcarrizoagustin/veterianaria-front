import Button from "../buttons/Button";
import styles from "./PetCard.module.css";

function PetCard() {
  return (
    <div className={styles.pet}>
      <div className={styles.data}>
        <h3>Nombre: Oreo</h3>
        <h3>Especie: Perro</h3>
        <h3>Raza: Caniche</h3>
      </div>
      <div className={styles.actions}>
        <Button
          text={"Dar de baja"}
          handleClick={() => console.log("Dando de baja a la mascota")}
          bg={"#c31c00"}
        />
        <Button
          text={"Ficha"}
          handleClick={() => console.log("Ficha de la mascota")}
          bg={"#37807a"}
        />
        <Button
          text={"Contacto"}
          handleClick={() => console.log("Contacto de la mascota")}
          bg={"#183b79"}
        />
      </div>
    </div>
  );
}

export default PetCard;
