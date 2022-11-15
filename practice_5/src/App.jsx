import { TodoHeader } from "./components/TodoHeader";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoCreate } from "./components/TodoCreate";
import "./css/App.css"

function App() {

  const TODOs = [
    { text: "Tener la Cama", completed: false },
    { text: "Cepillarme", completed: false },
    { text: "Comer", completed: false },
    { text: "Lavar la loza", completed: false },
    { text: "Dormir", completed: false },
  ]

  return (
    <div className="card">
      <TodoHeader />
      <TodoSearch />
      <TodoList>
        { TODOs.map(todo => (
          <TodoItem text={todo.text} completed={todo.completed} key={todo.text} />
        ))}
      </TodoList>
      <TodoCreate />
    </div>
  );
}

export default App;
