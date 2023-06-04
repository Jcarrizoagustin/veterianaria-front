import styles from "./Main.module.css";
import ShiftsChart from "../components/charts/ShiftsChart";
import DayShiftsContainer from "./containers/DayShiftsContainer";

function Main() {
  return (
    <main className={styles.main}>
      <DayShiftsContainer />
      <ShiftsChart peluqueria={1} veterinaria={6} />
    </main>
  );
}

export default Main;
