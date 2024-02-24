import { FormEvent, useState } from "react"

interface Tasks {
  id: number
  title: string,
  isDone: boolean
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

  return (
    <>
      <header>
        <h1>TODO</h1>
      </header>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button>Criar</button>
      </form>

      <main>
        <ul>
          {
            tasks.map(task => (
              <li>
                {task.title}
                <button onClick={() => handleRemoveOneTask(task.id)}>Deletar</button>
              </li>
            ))
          }
        </ul>
      </main>
    </>
  )
}
