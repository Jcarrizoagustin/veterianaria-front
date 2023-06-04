import Shift from "../Shift";
import styles from "./DayShiftsContainer.module.css";

function DayShiftsContainer() {
  const shiftsMock = [
    {
      id: 1,
      name: "Oreo",
      species: "Perro",
      breed: "Caniche",
      age: "3 meses",
      shiftHour: "18:00",
      shiftType: "Peluqueria",
      place: "Box Peluqueria",
    },
    {
      id: 2,
      name: "Oscu",
      species: "Perro",
      breed: "Dogo",
      age: "1 año",
      shiftHour: "16:00",
      shiftType: "Veterinaria",
      place: "Box 2",
    },
    {
      id: 3,
      name: "Magic",
      species: "Gato",
      breed: "Domestico",
      age: "7 meses",
      shiftHour: "16:00",
      shiftType: "Veterinaria",
      place: "Box 1",
    },
    {
      id: 4,
      name: "Slike",
      species: "Perro",
      breed: "Ovejero Alemán",
      age: "3 años",
      shiftHour: "13:00",
      shiftType: "Veterinaria",
      place: "Box 2",
    },
    {
      id: 2,
      name: "Oscu",
      species: "Perro",
      breed: "Dogo",
      age: "1 año",
      shiftHour: "16:00",
      shiftType: "Veterinaria",
      place: "Box 2",
    },
    {
      id: 3,
      name: "Magic",
      species: "Gato",
      breed: "Domestico",
      age: "7 meses",
      shiftHour: "16:00",
      shiftType: "Veterinaria",
      place: "Box 1",
    },
    {
      id: 4,
      name: "Slike",
      species: "Perro",
      breed: "Ovejero Alemán",
      age: "3 años",
      shiftHour: "13:00",
      shiftType: "Veterinaria",
      place: "Box 2",
    },
  ];

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Turnos del dia</h4>
      {shiftsMock.map((el) => (
        <Shift key={el.id} data={el} />
      ))}
    </div>
  );
}

export default DayShiftsContainer;
