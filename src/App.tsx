import { useState } from 'react'
import { type TodoId } from './types'

import { mockTodos } from './mocks/todos'
import { Todos } from './component/Todos'

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <main>
      <section className='todo-container'>
        <div className="todoapp">
          <Todos
            onRemoveTodo={handleRemove}
            todos={todos}
          />
        </div>
      </section>
    </main>
  )
}

export default App
