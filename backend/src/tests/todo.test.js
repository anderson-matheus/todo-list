const request = require('supertest');
const app = require('../index');

const PORT = 3001;
app.listen(PORT);

describe('Todo API', () => {
  let todoId;

  it('should create a new todo', async () => {
    const response = await request(app)
      .post('/todos')
      .send({
        title: 'Test todo',
        description: 'Test description',
        completed: false,
        completedDate: '2024-05-26',
        priority: 'LOW',
      });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe('Test todo');
    expect(response.body.description).toBe('Test description');
    expect(response.body.completed).toBe(false);
    expect(response.body.completedDate).toBe('2024-05-26T00:00:00.000Z');
    expect(response.body.priority).toBe('LOW');

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
      .send({ 
        title: 'Updated Test todo',
        description: 'Updated Test description',
        completed: true,
        completedDate: '2024-05-27',
        priority: 'MEDIUM',
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe('Updated Test todo');
    expect(response.body.description).toBe('Updated Test description');
    expect(response.body.completed).toBe(true);
    expect(response.body.completedDate).toBe('2024-05-27T00:00:00.000Z');
    expect(response.body.priority).toBe('MEDIUM');
  });

  it('should delete a todo', async () => {
    const response = await request(app).delete(`/todos/${todoId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Todo deleted successfully');
  });
});
