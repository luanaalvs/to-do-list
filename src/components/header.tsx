import logo from "@assets/rocket.svg";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <img src={logo} alt="" />
        </div>
        <h1>
          <span>to</span>
          <span>do</span>
        </h1>
      </div>
    </header>
  );
}
