import { TodoHeader } from "./components/TodoHeader";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoCreate } from "./components/TodoCreate";

function App() {

  const TODOs = [
    { text: "USC", completed: false },
    { text: "Univalle", completed: false },
    { text: "POS", completed: false },
    { text: "CAMACHO", completed: false },
    { text: "UAO", completed: false },
  ]

  return (
    <>
      <TodoHeader />
      <TodoSearch />
      <TodoList>
        { TODOs.map(todo => (
          <TodoItem text={todo.text} completed={todo.completed} key={todo.text} />
        ))}
      </TodoList>
      <TodoCreate />
    </>
  );
}

export default App;
