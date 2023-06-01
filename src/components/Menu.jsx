import styles from "./Menu.module.css";
import Navbar from "./Navbar";

function Menu() {
  return (
    <div className={styles.menu}>
      <Navbar />
    </div>
  );
}

export default Menu;
