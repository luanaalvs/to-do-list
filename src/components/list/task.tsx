import { Check, Trash2 } from "lucide-react";
import { Tasks } from "../../app";
import styles from "./task.module.css";

interface TaskProps {
  data: Tasks,
  remove: (id: number) => void,
  toggleStatus: ({ id, value }: { id: number, value: boolean }) => void,
}

export function Task({ data, remove, toggleStatus }: TaskProps) {
  function handleTaskToggle() {
    toggleStatus({ id: data.id, value: !data.isDone })
  }

  function handleRemove() {
    remove(data.id)
  }

  const checkboxClassName = data.isDone
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"]

  const paragraphCheckedClassName = data.isDone
    ? styles["paragraph-checked"]
    : ""

  return (
    <li className={styles.container}>
      <div>
        <label htmlFor="" onClick={handleTaskToggle}>
          <input readOnly type="checkbox" id="" />
          <div>
            <span className={`${styles.checkbox} ${checkboxClassName}`}>
              {data.isDone && <Check size={12} color="#F2F2F2" />}
            </span>
          </div>
          <span className={`${styles.paragraph} ${paragraphCheckedClassName}`}>
            {data.title}
          </span>
        </label>
      </div>
      <button
        className={styles.btn}
        onClick={handleRemove}
      >
        <Trash2
          size={14}
          color="#808080"
        />
      </button>
    </li>
  )
}