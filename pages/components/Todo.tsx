import React from "react";
import { TodoType } from "./TodoList";
import { BsCheckCircle, BsTrash } from "react-icons/bs/";

interface TodoPropsType {
  id: string;
  title: string;
  completed: boolean;
  setRequestMade: (arg0: TodoType[]) => void;
}

export const Todo = ({
  id,
  title,
  completed,
  setRequestMade,
}: TodoPropsType) => {
  const handleUpdateTodoClick = async () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: true, title: title }),
    };
    const response = await fetch(
      `https://sloppy-room-production.up.railway.app/todo/${id}`,
      requestOptions
    );

    const jsonResponse = await response.json();
    setRequestMade(jsonResponse);
    console.log("test click checkmark");
  };

  const handleDeleteTodoClick = async () => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(
      `https://sloppy-room-production.up.railway.app/todo/${id}`,
      requestOptions
    );
    const deleteResponse = await response;
    console.log("response from delete:", deleteResponse);
    setRequestMade([{ id: id, title: title, completed: completed }]);
  };

  return (
    <div className="flex max-xs:flex-col sm:flex-col md:flex-row lg:flex-row bg-gray-300 m-5 p-6 content-end sm:w-auto md:w-[500px] lg:w-[600px] justify-between items-center rounded">
      <div className="lg:w-[350px]">
        <input
          style={{ width: "100%", height: "35px", fontSize: "22px" }}
          className="w-100"
          placeholder="todo"
          value={title}
        />
      </div>
      <div className="flex">
        <div>
          <button
            onClick={handleUpdateTodoClick}
            className="bg-green-500 hover:bg-green-700 text-white font-bold rounded-full mr-2"
          >
            <BsCheckCircle size={50} />
          </button>
        </div>
        <div>
          <button
            onClick={handleDeleteTodoClick}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-full"
          >
            <BsTrash size={34} />
          </button>
        </div>
      </div>
    </div>
  );
};
