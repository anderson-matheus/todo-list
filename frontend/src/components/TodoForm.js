
import React, { useState } from 'react';
import {
  Form, Input, Checkbox, SubmitButton, Radio, Grid2fr,
  P, HR,
} from '../styles/TodoForm.styles';
import { toast } from 'react-toastify';

const TodoForm = ({ onFetchTodos, onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [completedDate, setCompletedDate] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !priority.trim()) {
      toast.error('Form with invalid data');
      return;
    };

    try {
      onAdd({
        title, description, priority, completedDate, completed,
      });
      setTitle('');
      setDescription('');
      setPriority('');
      setCompletedDate('');
      setCompleted(false);
      onFetchTodos();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid2fr>
        <Input
          type="text"
          placeholder="Enter todo title *"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Enter todo completed date"
          type="text"
          onChange={(e) => setCompletedDate(e.target.value)}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
        />
      </Grid2fr>
      <Input
        type="text"
        placeholder="Enter todo description *"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <P>Priority *</P>
      <HR />
      <label>
        <Radio
          type="radio"
          name="priority"
          value={'LOW'}
          checked={priority === 'LOW'}
          onChange={(_e) => setPriority('LOW')}
        /> Low
      </label>

      <label>
        <Radio
          type="radio"
          name="priority"
          value={'MEDIUM'}
          checked={priority === 'MEDIUM'}
          onChange={(_e) => setPriority('MEDIUM')}
        /> Medium
      </label>

      <label>
        <Radio
          type="radio"
          name="priority"
          value={'HIGHT'}
          checked={priority === 'HIGHT'}
          onChange={(_e) => setPriority('HIGHT')}
        /> Hight
      </label>
      <HR />

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