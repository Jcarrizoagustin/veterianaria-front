import styles from "./Shift.module.css";
import HandleCancleShift from "../components/handlers/HandleCancelShift";
import PropTypes from "prop-types";
function Shift({ data }) {
  return (
    <div
      className={`${styles.shift} ${
        data.shiftType === "Peluqueria"
          ? `${styles.borderOrange}`
          : `${styles.borderBlue}`
      }`}
    >
      <div className={styles.petData}>
        <h3 className={styles.petDataTitle}>Nombre: {data.name}</h3>
        <h3 className={styles.petDataTitle}>Especie: {data.species}</h3>
        <h3 className={styles.petDataTitle}>Raza: {data.breed}</h3>
      </div>
      <div className={styles.shiftData}>
        <h3 className={styles.shiftHour}>{data.shiftHour}</h3>
        <h3 className={styles.shiftType}>{data.shiftType}</h3>
      </div>
      <div className={styles.buttonsActions}>
        <button className={`${styles.button} ${styles.buttonComplete}`}>
          Completar
        </button>
        <button
          onClick={() => HandleCancleShift(data.id)}
          className={`${styles.button} ${styles.buttonCancel}`}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
Shift.propTypes = {
  data: PropTypes.object,
};
export default Shift;
