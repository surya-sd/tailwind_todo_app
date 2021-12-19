import React, { useState } from "react";

export const TodoList = ({ title, status, id, handleStatus, handleDelete, handleTitle }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [editTitle, setEditTitle] = useState(false);
  const handleTitleChange = () => {
    handleTitle(id, newTitle);
    setEditTitle(false);
  };

  return (
    <>
      <div className="w-[110%] border-2 border-zinc-200 p-2 mt-4 rounded">
        {editTitle ? (
          <div>
            <input
              type="text"
              placeholder="add todo"
              className="border-solid border-b-[2px] outline-none"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button
              onClick={handleTitleChange}
              className="py-1 px-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md
         hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              ok
            </button>
            <button
              onClick={() => setEditTitle(false)}
              className="py-1 px-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md
         hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              x
            </button>
          </div>
        ) : (
          <p className={(status ? "line-through decoration-black text-slate-500" : " ") + " font-medium text-lg"}>
            {title}
          </p>
        )}

        <div className="mt-2 flex justify-between">
          <button
            onClick={() => setEditTitle(true)}
            className="py-1 px-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md
         hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Edit
          </button>
          <button
            onClick={() => handleStatus(id)}
            className={
              (status ? "bg-green-500 hover:bg-green-700" : " bg-red-500 hover:bg-red-700") +
              " py-1 px-2  text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 "
            }
          >
            {status ? "Completed" : "Not Completed"}
          </button>
          <button
            onClick={() => handleDelete(id)}
            className="py-1 px-2 bg-red-500 text-white font-semibold rounded-lg shadow-md
         hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            x
          </button>
        </div>
      </div>
    </>
  );
};
