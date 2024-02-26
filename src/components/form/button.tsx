import { PlusCircle } from "lucide-react";
import styles from "./button.module.css";

interface ButtonProps {
  children: string,
}

export function Button({ children }: ButtonProps) {
  return (
    <button className={styles.btn}>
      <span>
        {children}
      </span>
      <PlusCircle
        size={16}
        color="#F2F2F2"
      />
    </button>
  )
}