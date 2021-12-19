import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export const TodoInput = ({ handleAdd }) => {
  const [title, setTitle] = useState("");

  return (
    <div className="flex w-[300px] justify-between ">
      <input
        className="border-solid border-b-[2px] outline-none rounded 
        bg-inherit text-slate-300 caret-slate-300 w-[90%] px-2"
        type="text"
        value={title}
        placeholder="add todo"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="py-2 px-2 ml-1 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={() => (handleAdd(title), setTitle(""))}
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};
