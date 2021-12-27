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

  const deleteTodo = (id:string)=>{
    const newToDO= todos.filter((todo)=> todo.id !==id);
    setTodos(newToDO);
    
    
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={TodoHandler} />
      <TodoList removeTodo={deleteTodo} items={todos} />
    </div>
  );
};

export default App;
