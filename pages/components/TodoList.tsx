import React from "react";
import { Todo } from "./Todo";

export interface TodoType {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoDataType {
  todoData: TodoType[];
  setRequestMade: (arg0: TodoType[]) => void;
}

export const TodoList = ({ todoData, setRequestMade }: TodoDataType) => {
  return (
    <div className="flex flex-col items-center">
      {todoData?.map((todo) => (
        <Todo
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          setRequestMade={setRequestMade}
        />
      ))}
    </div>
  );
};
