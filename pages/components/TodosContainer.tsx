import React, { useEffect, useState } from "react";
import { CreateTodo } from "./CreateTodo";
import { TodoList, TodoType } from "./TodoList";

const TodosContainer = () => {
  const [todoData, setTodoData] = useState([]);
  const [requestMade, setRequestMade] = useState<TodoType[]>([]);

  const getDataFromDb = async () => {
    const res = await fetch(
      `https://sloppy-room-production.up.railway.app/todo`
    );
    const data = await res.json();
    const reversedData = data?.reverse();
    const onlyUnCompletedTodos = reversedData?.filter(
      (todo: TodoType) => todo.completed != true
    );
    setTodoData(onlyUnCompletedTodos);

    return data;
  };

  useEffect(() => {
    const dataFromDb = getDataFromDb();
    console.log("datafrom DB: ", dataFromDb);
  }, [requestMade]);

  return (
    <div>
      <CreateTodo setRequestMade={setRequestMade} />
      <TodoList todoData={todoData} setRequestMade={setRequestMade} />
    </div>
  );
};

export default TodosContainer;
