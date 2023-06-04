import styles from "./ShiftsChart.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import PropTypes from "prop-types";

ChartJS.register(ArcElement, Tooltip, Legend);

function ShiftsChart({ peluqueria, veterinaria }) {
  const data = {
    labels: ["Peluqueria", "Veterinaria"],
    datasets: [
      {
        label: "Turnos",
        data: [peluqueria, veterinaria],
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
ShiftsChart.propTypes = {
  peluqueria: PropTypes.number,
  veterinaria: PropTypes.number,
};
export default ShiftsChart;
