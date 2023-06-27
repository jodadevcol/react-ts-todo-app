import { Todo } from './Todo'

import { type TodoId, type ListOfTodos } from '../types'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todos: React.FC<Props> = (Props) => {
  const { todos, onRemoveTodo } = Props

  return (
    <ul className='todo-list'>
      {
        todos.map(todo => (
          <li
            key={todo.id}
            className={`${todo.completed ? 'completed' : ''}`}
          >
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onRemoveTodo={onRemoveTodo}
            />
          </li>
        ))
      }
    </ul>
  )
}
