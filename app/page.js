"use client";
import React, { useState } from "react";

const page = () => {
  const [task, setTask] = useState("");
  const [desc, setdDesc] = useState("");
  const [main, setMain] = useState([]);

  const handleTask = (e) => {
    setTask(e.target.value);
  };
  const handleDesc = (e) => {
    setdDesc(e.target.value);
  };
  const handleDelete = (i)=>{
      const copyMain = [...main];
      copyMain.splice(i,1)
      setMain(copyMain)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMain([...main, { task, desc }]);
    setTask("");
    setdDesc("");
    console.log(main);
  };
  let displayTodo = <h2>No task available</h2>;

  if (main.length > 0) {
    displayTodo = main.map((e, i) => {
      return (
        <li className="flex justify-between items-center m-5"  key={i}>
          <div className="flex justify-between items-center w-2/3 ">
            <h3 className="font-bold">
              <span className="font-medium">{i + 1}.</span> {e.task}
            </h3>
            <h4 className="font-medium">{e.desc}</h4>
          </div>
          <button
            className="bg-red-400 rounded py-2 px-4"
            onClick={() => handleDelete(i)}
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-center p-4 text-white text-4xl font-bold">
        Todo
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          className="py-3 px-5 m-6 rounded "
          value={task}
          onChange={handleTask}
        />
        <input
          type="text"
          placeholder="Enter description"
          className="py-3 px-5 m-6 rounded "
          value={desc}
          onChange={handleDesc}
        />
        <button className="bg-black rounded text-white py-3 px-5 m-6 font-bold">
          Add Todo
        </button>
      </form>
      <div className="bg-blue-300 py-4 px-8 ">
        <ul>{displayTodo}</ul>
      </div>
    </>
  );
};

export default page;
