import React, { Component } from 'react';

export interface TodoContextProps {
    todos: Todo[];
    todoIdForEdit: Todo["id"] | null;
    addTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
    changeTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
    checkTodo: (id: Todo["id"]) => void;
    deleteTodo: (id: Todo["id"]) => void;
    selectTodoIdForEdit: (id: Todo["id"]) => void;
}

export const  TodoContext = React.createContext<TodoContextProps>({
    todos: [],
    todoIdForEdit: null,
    addTodo: ()=>{},
    changeTodo: ()=>{},
    checkTodo: ()=>{},
    deleteTodo: ()=>{},
    selectTodoIdForEdit: ()=>{},
});