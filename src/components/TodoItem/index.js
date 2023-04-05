import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {id, title} = todo
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-item">
      <p className="todo-item-description">{title}</p>
      <div className="button-container">
        <button type="button" className="todo-item-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
