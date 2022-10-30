import React, { useEffect } from "react";

const TodosContainer = () => {
  const getDataFromDb = async () => {
    // Fetch data from external API
    const res = await fetch(
      `https://sloppy-room-production.up.railway.app/todo`
    );
    const data = await res.json();

    return data;
  };

  useEffect(() => {
    const dataFromDb = getDataFromDb();
    console.log("datafrom DB: ", dataFromDb);
  }, []);

  return <div>This is an awesome todo list!</div>;
};

export default TodosContainer;
