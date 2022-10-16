import React, { Component } from "react";
import { TodoContext } from "./TodoContext";

export const useTodo = () => React.useContext(TodoContext);
