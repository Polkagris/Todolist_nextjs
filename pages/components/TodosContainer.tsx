import React, { useEffect, useState } from "react";
import { CreateTodo } from "./CreateTodo";
import { TodoList } from "./TodoList";

const TodosContainer = () => {
  const [todoData, setTodoData] = useState([]);
  const [requestMade, setRequestMade] = useState([]);

  const getDataFromDb = async () => {
    // Fetch data from external API
    const res = await fetch(
      `https://sloppy-room-production.up.railway.app/todo`
    );
    const data = await res.json();
    const reversedData = data?.reverse();
    setTodoData(reversedData);

    return data;
  };

  useEffect(() => {
    const dataFromDb = getDataFromDb();
    console.log("datafrom DB: ", dataFromDb);
  }, [requestMade]);

  return (
    <div>
      <CreateTodo setRequestMade={setRequestMade} />
      <TodoList todoData={todoData} />
    </div>
  );
};

export default TodosContainer;
