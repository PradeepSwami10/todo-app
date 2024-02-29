import React, { useState, useEffect } from 'react';
import './App.css';
interface Task {
  id: number;
  taskName: string;
  description: string;
  yourname: string;
  contact: string;
}
const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task>({
    id: 1,
    taskName: '',
    description: '',
    yourname: '',
    contact: '',
  });

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    const parsedTasks = storedTasks ? JSON.parse(storedTasks) : [];
    setTasks(parsedTasks);
  }, []);
  const addTask = () => {
    if (
      newTask.taskName.trim() !== '' &&
      newTask.description.trim() !== '' &&
      newTask.contact.toString().length <= 10
    ) {
      const updatedTasks = [...tasks, { ...newTask, id: tasks.length + 1 }];
      setTasks(updatedTasks);

      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setNewTask({
        id: newTask.id + 1,
        taskName: '',
        description: '',
        yourname: '',
        contact: '',
      });
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'contact' && (Number(value) < 0 || value.length > 10)) {
      return;
    }
    setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };
  return (
    <>
      <div>
        <div className="bgcolor p-5 mb-3">
          <h1 className="text-white font-bold underline text-6xl m-auto text-center">
            TODO APP
          </h1>
        </div>
        <div
          style={{ boxShadow: '0px 1px 5px 1px black' }}
          className="bg-white  p-5 m-auto rounded-md w-full sm:w-1/3 "
        >
          <input
            type="text"
            name="taskName"
            placeholder="Task Name"
            value={newTask.taskName}
            onChange={handleChange}
            className="outline-none border text-gray-600  p-2 rounded-full w-full"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newTask.description}
            onChange={handleChange}
            className="outline-none border text-gray-600 mt-2 p-2 rounded-full w-full"
          />
          <div className=" gap-3 mt-2 flex flex-col sm:flex-row">
            <input
              type="text"
              name="yourname"
              placeholder="Your Name"
              value={newTask.yourname}
              onChange={handleChange}
              className="outline-none border text-gray-600  p-2 rounded-full "
            />
            <input
              type="number"
              name="contact"
              placeholder="Contact"
              value={newTask.contact}
              onChange={handleChange}
              className="outline-none border text-gray-600  p-2 rounded-full"
            />
          </div>
          <button
            onClick={addTask}
            className="bgcolor px-5 py-2 rounded-md m-3 text-white font-medium"
          >
            Add Task
          </button>
        </div>
        <hr className="mt-5" />
        <div className="scrolll">
          {tasks.map((task) => (
            <div
              key={task.id}
              style={{ boxShadow: '0px 1px 5px 1px black' }}
              className="bg-white  p-5 mt-3 m-auto rounded-md w-full sm:w-10/12 "
            >
              <div className=" uppercase items-center flex flex-row justify-between border-b-2 italic text-slate-700 text-xl font-medium max-[600px]:flex-col">
                <p>
                  ({task.id}) Task Name :- {task.taskName}
                </p>
                <p>Your Name :- {task.yourname}</p>
                <p>Contact :- {task.contact}</p>
              </div>
              <span className="text-xl underline font-medium text-slate-700 mt-5 ">
                Task Description
              </span>
              <p className="font-medium leading-5 text-slate-700 italic   scrol">
                {task.description}
              </p>
              <button
                onClick={() => deleteTask(task.id)}
                className=" bg-red-500 text-white  py-2 px-5 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default App;
