// src/components/AddCard.js
import React, { useState } from "react";

const AddCard = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(0);
  const [status, setStatus] = useState("Todo"); // Default status

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return; // Prevent adding empty tasks

    const newCard = {
      title,
      priority,
      status,
      userId: null, // You can set a default userId or modify this to allow user selection
    };

    onAdd(newCard);
    setTitle("");
    setPriority(0);
  };

  return (
    <form onSubmit={handleSubmit} className="add-card-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value={0}>No priority</option>
        <option value={1}>Low</option>
        <option value={2}>Medium</option>
        <option value={3}>High</option>
        <option value={4}>Urgent</option>
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Todo">Todo</option>
        <option value="In progress">In progress</option>
        <option value="Done">Done</option>
        <option value="Cancelled">Cancelled</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddCard;
