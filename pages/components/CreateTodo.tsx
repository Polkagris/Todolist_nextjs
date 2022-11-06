import React from "react";

export const CreateTodo = () => {
  return (
    <div className="flex flex-col bg-gray-300 m-5 p-6 content-end sm:w-auto md:w-[500px] lg:w-[600px] justify-between items-center rounded">
      <div>
        <h2>Create a new todo</h2>
      </div>

      <div className="flex lg:w-[450px]">
        <div>
          <input
            style={{ width: "100%", height: "35px", fontSize: "22px" }}
            className="w-100"
            placeholder="todo"
          />
        </div>

        <div>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
