import styles from "./Navbar.module.css";
import { AiFillHome } from "react-icons/ai";
import { MdPets } from "react-icons/md";
import { IoTicket } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.icon} to={"/"}>
        <AiFillHome className={styles.icon} />
      </Link>
      <Link className={styles.icon} to={"/mascotas"}>
        <MdPets className={styles.icon} />
      </Link>
      <Link className={styles.icon} to={"/turnos"}>
        <IoTicket className={styles.icon} />
      </Link>
      <Link className={styles.icon} to={"/personal"}>
        <HiUserGroup className={styles.icon} />
      </Link>
    </nav>
  );
}

export default Navbar;
