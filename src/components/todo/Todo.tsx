import { type TodoId, type Todo as TodoType } from "../../types/types"

//? Se puede hacer de esta manera tambien
// interface Props {
//   id: string,
//   title: string,
//   completed: boolean
// }
//? Se puede hacer de esta manera tambien

interface Props extends TodoType {
  handleRemove: ({id}: TodoId)=> void,
  onToggleCompleteTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>)=> void
}

export const Todo: React.FC<Props> = ({id, title, completed, handleRemove, onToggleCompleteTodo}) => {

const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void =>{
  onToggleCompleteTodo({
    id,
    completed: event.target.checked
  })
}


  return (
    <div className="view">
      <input className="toggle"
      type='checkbox'
      checked={completed}
      onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button className="destroy" onClick={()=> handleRemove({id})}/>
    </div>
  )
}
