import './App.css'
import tasks from './data/tasks'
import TodoList from './components/Todolist'

function App() {
  return (
    <div className="container">
      <h1 className='text-6xl my-4 text-cyan-900'>My To Do List</h1>
      <TodoList tasks={tasks} />
    </div>
  )
}

export default App;