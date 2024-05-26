
import React, { useState } from 'react';
import { Form, Input, Checkbox, SubmitButton } from '../styles/TodoForm.styles';

const TodoForm = ({ onFetchTodos, onAdd }) => {
  const [text, setText] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      onAdd({text: text, completed: completed});
      setText('');
      setCompleted(false);
      onFetchTodos();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter todo text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label>
        Completed:
        <Checkbox
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </label>
      <SubmitButton type="submit">Add Todo</SubmitButton>
    </Form>
  );
};

export default TodoForm;