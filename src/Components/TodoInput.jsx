import React, { useState } from "react";

export const TodoInput = ({ handleAdd }) => {
  const [title, setTitle] = useState("");

  return (
    <div className="flex">
      <input
        className="border-solid border-b-[2px] outline-none"
        type="text"
        value={title}
        placeholder="add todo"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="py-1 px-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={() => (handleAdd(title), setTitle(""))}
      >
        +
      </button>
    </div>
  );
};
