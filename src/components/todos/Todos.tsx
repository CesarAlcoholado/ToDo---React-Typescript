import { type TodoId, type ListOfTodos, type Todo as TodoType } from "../../types/types"
import { Todo } from "../todo/Todo"


interface Props {
  todos: ListOfTodos,
  handleRemove: ({id}: TodoId)=> void,
  onToggleCompleteTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>)=> void,
}

export const Todos: React.FC<Props> = ({todos, handleRemove, onToggleCompleteTodo}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo)=> (
      <li key={todo.id} className={`${todo.completed && 'completed'}`}>
        <Todo key={todo.id}
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
        handleRemove={handleRemove}
        onToggleCompleteTodo={onToggleCompleteTodo}
        />
      </li>
      ))}
    </ul>
  )
}