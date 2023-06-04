import "./App.css";
import Main from "./components/Main";
import Menu from "./components/Menu";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mascotas" element={<h2>Mascotas</h2>} />
        <Route path="/turnos" element={<h2>Turnos</h2>} />
        <Route path="/personal" element={<h2>Personal</h2>} />
      </Routes>
    </>
  );
}

export default App;
