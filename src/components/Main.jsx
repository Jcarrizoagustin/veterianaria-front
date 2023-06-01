import styles from "./Main.module.css";
import DayShiftsContainer from "./containers/DayShiftsContainer";

function Main() {
  return (
    <main className={styles.main}>
      <DayShiftsContainer />
    </main>
  );
}

export default Main;
