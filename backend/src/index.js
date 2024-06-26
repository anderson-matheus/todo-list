const express = require('express');

const { validateCreateTodo, validateUpdateTodo } = require('./middlewares/todoMiddleware');
const TodoRepository = require('./repositories/todoRepository');

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const todoRepository = new TodoRepository();

app.post('/todos', validateCreateTodo, async (req, res) => {
  const {
    title, description, completed, completedDate, priority
  } = req.body;
  try {
    const todo = await todoRepository.createTodo(
      title, description, priority, completedDate, completed
    );
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/todos', async (_req, res) => {
  try {
    const todos = await todoRepository.getAllTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/todos/:id', validateUpdateTodo, async (req, res) => {
  const { id } = req.params;
  const { title, description, priority, completedDate, completed } = req.body;
  try {
    const todo = await todoRepository.updateTodo(
      id, title, description, priority, completedDate, completed
    );
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await todoRepository.deleteTodo(id);
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = app;
