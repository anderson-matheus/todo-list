import React, { useState } from 'react';
import { List, ListItem, Input } from '../styles/TodoList.styles';
import { toast } from 'react-toastify';

const TodoList = ({ todos, onDelete, onUpdate }) => {
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editPriority, setEditPriority] = useState('');
  const [editCompletedDate, setEditCompletedDate] = useState('');
  const [editCompleted, setEditCompleted] = useState(false);

  const handleEdit = (
    id, title, description, priority, completedDate, completed,
  ) => {
    setEditTodoId(id);
    setEditTitle(title);
    setEditDescription(description);
    setEditPriority(priority);
    setEditCompletedDate(completedDate);
    setEditCompleted(completed);
  };

  const handleUpdateTodo = async (id) => {
    if (!editTitle.trim() || !editDescription.trim() || !editPriority.trim()) {
      toast.error('Form with invalid data');
      return;
    }

    onUpdate(id, {
      title: editTitle,
      description: editDescription,
      priority: editPriority,
      completedDate: editCompletedDate,
      completed: editCompleted,
    });
    setEditTodoId(null);
  };

  const formatDate = (date = null) => {
    if (!date) {
      return '';
    }
    date = date.split('T');
    return date[0];
  }

  return (
    <List>
      <h1>List</h1>
      {todos.map(todo => (
        <ListItem key={todo.id}>
          <h4>#{todo.id}</h4>
          <hr />
          {editTodoId === todo.id ? (
            <>
              <div className='grid2fr'>
                <Input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value ?? todo.title)}
                />

                <Input
                  placeholder="Enter todo completed date"
                  type="text"
                  onChange={(e) => setEditCompletedDate(
                    formatDate(e.target.value ?? todo.completedDate)
                  )}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                />
              </div>

              <Input
                type="text"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value ?? todo.description)}
              />

              <div className='priority'>
                <p>Priority</p>
                <hr />
                <label>
                  <input
                    type="radio"
                    name="priority"
                    value={editPriority}
                    checked={editPriority === 'LOW' ? true : false}
                    onChange={(_e) => setEditPriority('LOW')}
                  /> Low
                </label>

                <label>
                  <input
                    type="radio"
                    name="priority"
                    value={editPriority}
                    checked={editPriority === 'MEDIUM' ? true : false}
                    onChange={(_e) => setEditPriority('MEDIUM')}
                  /> Medium
                </label>

                <label>
                  <input
                    type="radio"
                    name="priority"
                    value={editPriority}
                    checked={editPriority === 'HIGHT' ? true : false}
                    onChange={(_e) => setEditPriority('HIGHT')}
                  /> Hight
                </label>
                <hr />
              </div>

              <label>
                Completed:
                <input
                  key={todo.id}
                  type="checkbox"
                  checked={editCompleted}
                  onChange={(e) => setEditCompleted(e.target.checked)}
                />
              </label>

              <div className='grid2fr'>
                <button className='edit' onClick={() => handleUpdateTodo(todo.id)}>Update</button>
                <button className='delete' onClick={() => onDelete(todo.id)}>Delete</button>
              </div>
            </>
          ) : (
            <>
              <div className='grid2fr'>
                <Input
                  type="text"
                  value={todo.title}
                  disabled={true}
                />

                <Input
                  placeholder="Enter todo completed date"
                  type="text"
                  value={formatDate(todo.completedDate)}
                  disabled={true}
                />
              </div>

              <Input
                type="text"
                value={todo.description}
                disabled={true}
              />

              <div className='priority'>
                <p>Priority - {todo.priority}</p>
              </div>

              <label>
                Completed:
                <input
                  type="checkbox"
                  checked={todo.completed}
                  disabled={true}
                />
              </label>

              <div className='grid2fr'>
                <button className='edit' onClick={() => handleEdit(
                  todo.id,
                  todo.title,
                  todo.description,
                  todo.priority,
                  todo.completedDate,
                  todo.completed,
                )}>Edit</button>
                <button className='delete' onClick={() => onDelete(todo.id)}>Delete</button>
              </div>
            </>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
