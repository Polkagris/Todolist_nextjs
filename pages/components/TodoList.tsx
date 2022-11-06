import React from "react";
import { Todo } from "./Todo";

export interface TodoType {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoDataType {
  todoData: TodoType[];
}

export const TodoList = ({ todoData }: TodoDataType) => {
  return (
    <div className="flex flex-col items-center">
      {todoData?.map((todo) => (
        <Todo id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </div>
  );
};
