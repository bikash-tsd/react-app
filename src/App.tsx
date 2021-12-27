import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./interfaces/todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const TodoHandler = (text: string) => {
    setTodos((prv) => [
      ...prv,
      {
        text: text,
        id: Math.random().toString(),
      },
    ]);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={TodoHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
