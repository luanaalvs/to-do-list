import { Trash2 } from "lucide-react";
import styles from "./task.module.css";

export function Task() {
  return (
    <li className={styles.container}>
      <div>
        <label htmlFor="">
          <input readOnly type="checkbox" id="" />
          <div>
            <span className={styles.checkbox}></span>
          </div>
          <span className={styles.paragraph}>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Integer urna interdum massa libero auctor neque.
          </span>
        </label>
      </div>
      <button className={styles.btn}>
        <Trash2
          size={14}
          color="#808080"
        />
      </button>
    </li>
  )
}