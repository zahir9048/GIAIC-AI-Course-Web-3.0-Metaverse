'use client'

import { useState } from "react";

export default function Home() {

  const [item, setItem] = useState("");
  const [tasks, setTask] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [checkedTasks, setCheckedTasks] = useState<boolean[]>(new Array(tasks.length).fill(false));


  const handleSaveTask = () => {
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = item;
      setTask(updatedTasks); 
      setEditIndex(null); 
    } else if (item.trim() !== "") {
      setTask([...tasks, item]);
      setCheckedTasks([...checkedTasks, false]);
    }
    setItem("");
  };

  let handleDeleteTask = (index: number) => {
    let newTasks = [...tasks]; 
    newTasks.splice(index, 1); 
    setTask(newTasks);

    const updatedCheckedTasks = [...checkedTasks];
    updatedCheckedTasks.splice(index, 1);
    setCheckedTasks(updatedCheckedTasks);
    setItem("")
  }

  let handleEditTask = (index: number) => {
    setItem(tasks[index]);
    setEditIndex(index);
  }

  const handleCheckboxChange = (index: number) => {
    const updatedCheckedTasks = [...checkedTasks];
    updatedCheckedTasks[index] = !updatedCheckedTasks[index];
    setCheckedTasks(updatedCheckedTasks);
  };
  const handleClearAllTasks = () => {
    if (editIndex !== null) {
      setEditIndex(null); 
    }
    setTask([]);
    setCheckedTasks([]);
    setItem("")
  };

  return (
    <>
      <div className="main-sec flex items-center justify-center">
        <div className="container">
          <div className="main-wrapper max-w-[700px] mx-auto border-4 border-solid border-indigo-500 rounded-[12px] p-3">
            <h1 className="text-center text-[28px]">Todo List By Zahir Khan</h1>
            <div className="input-wrapper flex justify-between">
              <input value={item} onKeyDown={(e) => {if (e.key === 'Enter') {handleSaveTask();}}} onChange={(e) => setItem(e.target.value)} type="text"  className="w-[85%] p-1 border-2 border-solid border-black rounded-[8px]" placeholder="Type Item Name" />
              <button type="button" onClick={handleClearAllTasks} id="add-btn" title="Clear All Tasks"><i className="text-[24px] bi bi bi-x-circle"></i></button>
              <button type="button" onClick={handleSaveTask} id="add-btn" title="Add Task"><i className="text-[24px] bi bi-plus-circle"></i></button>
            </div>
            <div className="tasks-wrapper">
            {tasks.map((task, index) => (
              <label htmlFor={`checkbox-${index}`} key={index} className={`task cursor-pointer flex gap-[10px]  p-3 mb-2 rounded-[10px] ${checkedTasks[index] ? 'bg-green-500' : 'bg-[#ef4444]'}`}>
                <input id={`checkbox-${index}`} type="checkbox" checked={checkedTasks[index]} onChange={() => handleCheckboxChange(index)} />
                <div className="flex justify-between w-full">
                  <p>{index + 1}. {task}</p>
                  <div className="flex gap-[15px]">
                    <button type="button" onClick={() => handleEditTask(index)} title="Edit Task">Edit</button>
                    <button type="button" onClick={() => handleDeleteTask(index)} title="Delete Task">Delete</button>
                  </div>
                </div>
              </label>
             ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
