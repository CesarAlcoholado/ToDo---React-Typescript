import { type FilterValue, type Todo as TodoType} from "../../types/types"
import { Filters } from "../filters/Filters"

interface Props {
  activeCount: number,
  completedCount: number,
  filterSelected: FilterValue,
  handleCompleted: ()=> void,
  onFilterChange: (filter: FilterValue)=> void
}

export const Footer: React.FC<Props> = ({
  completedCount = 0,
  activeCount = 0,
  handleCompleted,
  filterSelected,
  onFilterChange}) => {    
    
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> Pending ToDos
      </span>
    <Filters
      filterSelected={filterSelected}
      onFilterChange={onFilterChange}
    />
    {
      completedCount > 0 && (
        <button className="clear-completed" onClick={handleCompleted}>
          Delete Completed
        </button>
      )
    }
    </footer>
  )
}
