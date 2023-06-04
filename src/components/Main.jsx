import styles from "./Main.module.css";
import ShiftsChart from "../components/charts/ShiftsChart";
import DayShiftsContainer from "./containers/DayShiftsContainer";
import PetsChart from "./charts/PetsChart";

function Main() {
  return (
    <main className={styles.main}>
      <DayShiftsContainer />
      <ShiftsChart />
      <PetsChart />
    </main>
  );
}

export default Main;
