const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class TodoRepository {
  async createTodo(title, description, priority, completedDate, completed) {
    try {
      const todo = await prisma.todo.create({
        data: {
          title,
          description,
          completed,
          priority,
          completedDate: completedDate ? new Date(completedDate) : null,
        },
      });
      return todo;
    } catch (error) {
      throw new Error('Unable to create todo');
    }
  }

  async getAllTodos() {
    try {
      const todos = await prisma.todo.findMany({orderBy: {
        id: "desc",
      }});
      return todos;
    } catch (error) {
      throw new Error('Unable to fetch todos');
    }
  }

  async updateTodo(id, title, description, priority, completedDate, completed) {
    try {
      const todo = await prisma.todo.update({
        where: { id: parseInt(id) },
        data: {
          title,
          description,
          priority,
          completedDate: completedDate ? new Date(completedDate) : null,
          completed
        },
      });
      return todo;
    } catch (error) {
      throw new Error('Unable to update todo');
    }
  }

  async deleteTodo(id) {
    try {
      await prisma.todo.delete({
        where: { id: parseInt(id) },
      });
    } catch (error) {
      throw new Error('Unable to delete todo');
    }
  }
}

module.exports = TodoRepository;
