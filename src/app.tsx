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
              <li>{task.title}</li>
            ))
          }
        </ul>
      </main>
    </>
  )
}
