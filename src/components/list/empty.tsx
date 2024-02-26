import clipboard from "../../assets/clipboard.png";
import styles from "./empty.module.css";

export function Empty() {
  return (
    <section className={styles.container}>
      <div>
        <img
          src={clipboard}
          alt="Ilustração de uma prancheta"
        />
      </div>
      <div className={styles.text}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </section>
  )
}