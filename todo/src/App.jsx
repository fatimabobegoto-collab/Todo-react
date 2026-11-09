import "./index.css";
import TodoList from "./TodoList.jsx";
import { useState } from "react";
export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  function addTodo(val) {
    setTodos((prev) => [...prev, val]);
    setInput("");
  }
  return (
    <div className="content">
      <section className="sec1">
        <h1>todos</h1>
        <div>
          <input
            type="text"
            placeholder="Add todo..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button onClick={() => addTodo(input)}>+</button>
        </div>
      </section>
      <section className="list">
        <TodoList todos={todos} />
      </section>
    </div>
  );
}
