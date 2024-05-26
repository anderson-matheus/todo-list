const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class TodoRepository {
  async createTodo(text, completed) {
    try {
      const todo = await prisma.todo.create({
        data: {
          text,
          completed,
        },
      });
      return todo;
    } catch (error) {
      throw new Error('Unable to create todo');
    }
  }

  async getAllTodos() {
    try {
      const todos = await prisma.todo.findMany();
      return todos;
    } catch (error) {
      console.log(error)
      throw new Error('Unable to fetch todos');
    }
  }

  async updateTodo(id, text, completed) {
    try {
      const todo = await prisma.todo.update({
        where: { id: parseInt(id) },
        data: {
          text,
          completed,
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
