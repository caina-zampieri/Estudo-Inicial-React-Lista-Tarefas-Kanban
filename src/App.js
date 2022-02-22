import React, { useState } from "react";

import "./styles.css";

import Navbar from "./components/Navbar/navbar";
import TaskList from "./components/TaskList/tasklist";

const task = {
  id: 0,
  title: "Nova Tarefa",
  state: "pendente"
};

const idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    console.log("funcao sendo chamada em app");
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title="Pendente" onAddTask={addTask} tasks={tasks} />
      </div>
    </div>
  );
}
