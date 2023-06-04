import styles from "./ShiftsChart.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function ShiftsChart() {
  const data = {
    labels: ["Peluqueria", "Veterinaria"],
    datasets: [
      {
        label: "Turnos",
        data: [12, 19],
        backgroundColor: ["rgba(239, 139, 110, 0.8)", "rgba(21, 92, 145, 0.8)"],
        borderColor: ["rgba(239, 139, 110, 1)", "rgba(21, 92, 145, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Turnos</h3>
      <Pie className={styles.pie} data={data} />
    </div>
  );
}

export default ShiftsChart;
