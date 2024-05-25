const request = require('supertest');
const app = require('../index');

const PORT = 3001;
app.listen(PORT);

describe('Todo API', () => {
  let todoId;

  it('should create a new todo', async () => {
    const response = await request(app)
      .post('/todos')
      .send({ text: 'Test Todo', completed: false });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.text).toBe('Test Todo');
    expect(response.body.completed).toBe(false);

    todoId = response.body.id;
  });

  it('should get all todos', async () => {
    const response = await request(app).get('/todos');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should update a todo', async () => {
    const response = await request(app)
      .put(`/todos/${todoId}`)
      .send({ text: 'Updated Todo', completed: true });

    expect(response.statusCode).toBe(200);
    expect(response.body.text).toBe('Updated Todo');
    expect(response.body.completed).toBe(true);
  });

  it('should delete a todo', async () => {
    const response = await request(app).delete(`/todos/${todoId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Todo deleted successfully');
  });
});
