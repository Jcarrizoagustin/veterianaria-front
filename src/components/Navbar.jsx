import styles from "./Navbar.module.css";
import { AiFillHome } from "react-icons/ai";
import { MdPets } from "react-icons/md";
import { IoTicket } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <AiFillHome className={styles.icon} />
      <MdPets className={styles.icon} />
      <IoTicket className={styles.icon} />
      <HiUserGroup className={styles.icon} />
    </nav>
  );
}

export default Navbar;
