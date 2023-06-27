import { type TodoId, type OnlyTodo } from '../types'

interface Props extends OnlyTodo {
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = (Props) => {
  const { id, title, completed, onRemoveTodo } = Props

  return (
    <div className="view" data-todo={id}>
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={() => {}}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {
          onRemoveTodo({ id })
        }}
      />
    </div>
  )
}
