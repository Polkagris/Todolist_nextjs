import React, { useState } from "react";
import { TodoType } from "./TodoList";

interface CreateTodoPropTypes {
  setRequestMade: (arg0: TodoType[]) => void;
}

export const CreateTodo = ({ setRequestMade }: CreateTodoPropTypes) => {
  const [todoInput, setTodoInput] = useState("");
  const [postResponse, setPostResponse] = useState("");

  const handleTodoInputChange = (e) => {
    console.log("e.target.value", e.target.value);
    setTodoInput(e.target.value);
  };

  const handleCreateNewTodoClick = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: todoInput, completed: false }),
    };
    const response = await fetch(
      "https://sloppy-room-production.up.railway.app/todo",
      requestOptions
    );
    const jsonResponse = await response?.json();
    setRequestMade(jsonResponse);

    setTodoInput("");
  };

  return (
    <div className="flex flex-col bg-gray-300 m-5 p-6 content-end sm:w-auto md:w-[500px] lg:w-[600px] items-center rounded mx-auto">
      <div>
        <h2 className="text-2xl mb-2">Create a new todo</h2>
      </div>

      <div className="flex lg:w-[450px] justify-around items-center">
        <div>
          <input
            style={{ width: "100%", height: "35px", fontSize: "22px" }}
            className="w-100"
            placeholder="todo"
            value={todoInput}
            onChange={handleTodoInputChange}
          />
        </div>

        <div>
          <button
            disabled={todoInput?.length <= 0}
            onClick={handleCreateNewTodoClick}
            className="bg-green-500 hover:bg-green-700 disabled:bg-slate-50 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Add todo
          </button>
        </div>
      </div>
    </div>
  );
};
