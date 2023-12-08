import { useState } from "react"
import { Todos } from "./components/todos/Todos";
import { TodoTitle, type FilterValue, type TodoId, type Todo as TodoType } from "./types/types";
import { TODO_FILTERS } from "./consts/consts";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";


const mockToDos = [
    {
      id: '1',
      title: 'Learn React + Typescript',
      completed: true,
  },
    {
    id: '2',
    title: 'Finish my portfolio',
    completed: false,
  },
    {
    id: '3',
    title: 'Get a job',
    completed: false,
  }
]



const App = ():JSX.Element => {

  const [todos, setTodos] = useState(mockToDos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({id}: TodoId): void => {
    const newTodos = todos.filter(t=> t.id !== id);
    setTodos(newTodos)
  }

  const handleCompleted = ({id, completed}: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })
    setTodos(newTodos)
  }

  const onFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed

    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed

    return todo
  })

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleAddToDo = ({title}: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const activeCount = todos.filter((todo)=> !todo.completed).length

  const completedCount = todos.length - activeCount;

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddToDo}/>
      <Todos
      todos={filteredTodos} 
      handleRemove={handleRemove}
      onToggleCompleteTodo={handleCompleted}
      />
      <Footer
      activeCount={activeCount}
      completedCount={completedCount}  
      handleCompleted={handleRemoveAllCompleted}    
      filterSelected={filterSelected}
      onFilterChange={onFilterChange}
      />
    </div>
  )
}

export default App
