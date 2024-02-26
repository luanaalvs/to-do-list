import { FormEvent, useState } from "react";
import styles from "./app.module.css";
import { Button } from "./components/form/button";
import { Input } from "./components/form/input";
import { Header } from "./components/header";
import { Empty } from "./components/list/empty";
import { Task } from "./components/list/task";

export interface Tasks {
  id: number,
  title: string,
  isDone: boolean,
}

export function App() {
  const [title, setTitle] = useState("")
  const [tasks, setTasks] = useState<Tasks[]>([])

  function handleAddTask(e: FormEvent) {
    e.preventDefault()

    const newTask = [
      ...tasks,
      {
        id: new Date().getTime(),
        title: title,
        isDone: false,
      }
    ]

    setTasks(newTask)
    setTitle("")
  }

  function handleRemoveOneTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasks(newTasks)
  }

  function toggleTaskStatus({ id, value }: { id: number, value: boolean }) {
    const newTask = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isDone: value
        }
      }
      return { ...task }
    })

    setTasks(newTask)
  }

  const doneTasks = tasks.reduce((total, task) => {
    return total + (task.isDone ? 1 : 0)
  }, 0)

  return (
    <>
      <Header />

      <form
        className={styles.form}
        onSubmit={handleAddTask}
      >
        <Input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Button>Criar</Button>
      </form>

      <main className={styles.tasks}>
        <section className={styles.info}>
          <div>
            <span>Tarefas criadas</span>
            <span className={styles.counter}>{tasks.length}</span>
          </div>
          <div>
            <span>Concluídas</span>
            <span className={styles.counter}>
              {
                tasks.length === 0
                  ? tasks.length
                  : `${doneTasks} de ${tasks.length}`
              }
            </span>
          </div>
        </section>

        {
          tasks.length > 0 ? (
            <ul className={styles.list}>
              {
                tasks.map(task => (
                  <Task
                    key={task.id}
                    data={task}
                    remove={handleRemoveOneTask}
                    toggleStatus={toggleTaskStatus}
                  />
                ))
              }
            </ul>
          ) : (
            <Empty />
          )
        }       
      </main>
    </>
  )
}
