import React, { useState } from "react";
import styles from './todolistMain.module.css'; // Import the CSS module

const TodoListMain = () => {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "pending",
  });

  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [editTask, setEditTask] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "pending",
  });

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleAddTask = () => {
    if (!newTask.title || !newTask.description || !newTask.startDate || !newTask.endDate) {
      alert("All fields are required");
      return;
    }

    setTasks([...tasks, newTask]);
    setNewTask({ title: "", description: "", startDate: "", endDate: "", status: "pending" });
  };

  const handleDelete = (index) => {
    const deleteTask = tasks.filter((_, i) => i !== index);
    setTasks(deleteTask);
  };

  const handleEdit = (index) => {
    setEdit(index);
    setEditTask(tasks[index]);
    setOpenModal(true);
  };

  const handleChangeEdit = (e) => {
    setEditTask({ ...editTask, [e.target.name]: e.target.value });
  };

  const updateTask = () => {
    const updatedTasks = tasks.map((task, index) => (index === edit ? editTask : task));
    setTasks(updatedTasks);
    setOpenModal(false);
    setEdit(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.normalForm}>
        <h1>TO-DO List</h1>
        <input name="title" type="text" placeholder="Title" required value={newTask.title} onChange={handleChange} />
        <input name="description" type="text" placeholder="Description" required value={newTask.description} onChange={handleChange} />
        <input name="startDate" type="date" required value={newTask.startDate} onChange={handleChange} />
        <input name="endDate" type="date" required value={newTask.endDate} onChange={handleChange} />
        <select name="status" value={newTask.status} onChange={handleChange} required>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="not started">Not Started</option>
        </select>
        <button className={styles.addBtn} onClick={handleAddTask}>Add Task</button>
      </div>

      <div>
        <table>
          <caption>The Register List</caption>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.startDate}</td>
                <td>{task.endDate}</td>
                <td>{task.status}</td>
                <td>
                  <button className={styles.editBtn} onClick={() => handleEdit(index)}>Edit</button>
                  <button className={styles.deleteBtn} onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openModal && (
        <div className={styles.openModal}>
          <h1 className={styles.edit}>Edit Task</h1>
          <input name="title" type="text" placeholder="Title" required value={editTask.title} onChange={handleChangeEdit} />
          <input name="description" type="text" placeholder="Description" required value={editTask.description} onChange={handleChangeEdit} />
          <input name="startDate" type="date" required value={editTask.startDate} onChange={handleChangeEdit} />
          <input name="endDate" type="date" required value={editTask.endDate} onChange={handleChangeEdit} />
          <select name="status" value={editTask.status} onChange={handleChangeEdit} required>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="not started">Not Started</option>
          </select>
          <button className={styles.updateBtn} onClick={updateTask}>Update</button>
          <button className={styles.cancelBtn} onClick={() => setOpenModal(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default TodoListMain;



