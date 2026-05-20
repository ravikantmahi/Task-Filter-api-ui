const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

const tasks = [
    { id: 1, text: "Design the UI", status: "completed" },
    { id: 2, text: "Write Express routes", status: "pending" },
    { id: 3, text: "Deploy to production", status: "pending" }
];

app.get('/api/tasks', (req, res) => {
    const status = req.query.status; 
    if (status) {
        const filteredTasks = tasks.filter(t => t.status === status);
        return res.status(200).json(filteredTasks);
    }
    res.status(200).json(tasks);
});

app.get('/api/tasks/:taskId', (req, res) => {
    const id = parseInt(req.params.taskId); 
    const task = tasks.find(t => t.id === id);
    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(task);
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});