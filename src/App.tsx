import React from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoPanel } from "./components/TodoPanel/TodoPanel";

const DEFAULT_TODO_LIST = [
  { id: 1, name: "task 1", description: "description 1", checked: false },
  { id: 2, name: "task 2", description: "description 2", checked: false },
  {
    id: 3,
    name: "task 3",
    description:
      "so long task description 3 so long task description so long task description so long task description so long task description",
    checked: true,
  },
];

export const App = () => {
  const [todoIdForEdit, setTodoIdForEdit] = React.useState<Todo["id"] | null>(
    null
  );
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);
  const selectTodoIdForEdit = (id: Todo["id"]) => {
    setTodoIdForEdit(id);
  };
  const addTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {
    setTodos([
      ...todos,
      { id: todos[todos.length - 1].id + 1, description, name, checked: false },
    ]);
  };

  const checkTodo = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: Todo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoIdForEdit) {
          return { ...todo, name, description };
        }
        return todo;
      })
    );
    setTodoIdForEdit(null);
  };
  return (
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header todoCount={todos.length} />
        <TodoPanel mode="add" addTodo={addTodo} />
        <TodoList
          todos={todos}
          todoIdForEdit={todoIdForEdit}
          checkTodo={checkTodo}
          deleteTodo={deleteTodo}
          selectTodoIdForEdit={selectTodoIdForEdit}
          changeTodo={changeTodo}
        />
      </div>
    </div>
  );
};
