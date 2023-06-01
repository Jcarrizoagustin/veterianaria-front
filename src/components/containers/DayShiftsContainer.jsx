import Shift from "../Shift";
import styles from "./DayShiftsContainer.module.css";

function DayShiftsContainer() {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Turnos del dia</h4>
      <Shift />
      <Shift />
      <Shift />
      <Shift />
      <Shift />
      <Shift />
    </div>
  );
}

export default DayShiftsContainer;
