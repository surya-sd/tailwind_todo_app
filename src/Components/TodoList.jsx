import React, { useState } from "react";
import { AiOutlineCheck, AiOutlineClose, AiOutlineEdit } from "react-icons/ai";

export const TodoList = ({ title, status, id, handleStatus, handleDelete, handleTitle }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [editTitle, setEditTitle] = useState(false);
  const handleTitleChange = () => {
    handleTitle(id, newTitle);
    setEditTitle(false);
  };

  return (
    <>
      <div className="w-[300px] border-2 border-slate-600 p-2 mt-4 rounded-xl ">
        {editTitle ? (
          <div className="flex w-[100%] justify-between">
            <input
              type="text"
              placeholder="add todo"
              className="border-solid border-b-[2px] outline-none rounded 
              bg-inherit text-slate-300 caret-slate-300 w-[70%]"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button
              onClick={handleTitleChange}
              className="p-2 bg-green-900 text-white font-semibold rounded-lg shadow-md
         hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              <AiOutlineCheck />
            </button>
            <button
              title="Close"
              onClick={() => setEditTitle(false)}
              className="py-1 px-2 bg-red-900 text-white font-semibold rounded-lg shadow-md
         hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              <AiOutlineClose />
            </button>
          </div>
        ) : (
          <div className="w-[100%] text-center">
            <p
              className={
                (status ? "line-through decoration-slate-200  " : " ") + " font-medium text-xl text-slate-300 font-mono"
              }
            >
              {title}
            </p>
          </div>
        )}

        <div className="mt-2 flex justify-between w-[100]">
          <button
            title="Edit Title"
            onClick={() => setEditTitle(true)}
            className="py-1 px-2 bg-blue-900 text-white font-semibold rounded-lg shadow-md
         hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            <AiOutlineEdit />
          </button>
          <button
            title="Todo Status"
            onClick={() => handleStatus(id)}
            className={
              (status ? "bg-green-900 hover:bg-green-800" : " bg-red-900 hover:bg-red-800") +
              " py-1 px-2  text-white font-semibold rounded-lg shadow-md focus:outline-none"
            }
          >
            {status ? "Completed" : "Not Completed"}
          </button>
          <button
            title="Delete"
            onClick={() => handleDelete(id)}
            className="py-1 px-2 bg-red-900 text-white font-semibold rounded-lg shadow-md
         hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </>
  );
};
