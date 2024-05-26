import React, { useState } from 'react';
import { List, ListItem, Input } from '../styles/TodoList.styles';

const TodoList = ({ todos, onDelete, onUpdate }) => {
  const [editTodoId, setEditTodoId] = useState(null);
  const [editText, setEditText] = useState('');
  const [editCompleted, setEditCompleted] = useState(false);

  const handleEdit = (id, text, completed) => {
    setEditTodoId(id);
    setEditText(text);
    setEditCompleted(completed);
  };

  const handleUpdateTodo = async (id) => {
    if (!editText.trim()) return;
    onUpdate(id, { text: editText, completed: editCompleted });
  };

  return (
    <List>
      {todos.map(todo => (
        <ListItem key={todo.id}>
          {editTodoId === todo.id ? (
            <>
              <Input
                key={todo.id}
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value ?? todo.text)}
              />
              <label>
                Completed:
                <input
                  key={todo.id}
                  type="checkbox"
                  checked={editCompleted}
                  onChange={(e) => setEditCompleted(e.target.checked)}
                />
              </label>
              <button onClick={() => handleUpdateTodo(todo.id)}>Update</button>
              <button onClick={() => onDelete(todo.id)}>Delete</button>
            </>
          ) : (
            <>
              <Input
                key={todo.id}
                type="text"
                value={todo.text}
                disabled={true}
              />
              <label>
                Completed:
                <input
                  key={todo.id}
                  type="checkbox"
                  checked={todo.completed}
                  disabled={true}
                />
              </label>
              <button onClick={() => handleEdit(todo.id, todo.text, todo.completed)}>Edit</button>
              <button onClick={() => onDelete(todo.id)}>Delete</button>
            </>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;