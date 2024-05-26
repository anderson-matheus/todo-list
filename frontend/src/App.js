import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { H1 } from './styles/App.styles';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleFetchTodos();
  }, []);

  const handleFetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/todos`);
      setTodos([...response.data]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  const handleAddTodo = async (data) => {
    try {
      setLoading(true);
      await axios.post(`${process.env.REACT_APP_API_URL}/todos`, data);
      handleFetchTodos();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }    
  };

  const handleDeleteTodo = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${process.env.REACT_APP_API_URL}/todos/${id}`);
      handleFetchTodos();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  const handleUpdateTodo = async (id, data) => {
    try {
      setLoading(true);
      await axios.put(`${process.env.REACT_APP_API_URL}/todos/${id}`, data);
      handleFetchTodos();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <ToastContainer />
      <H1>Todo List</H1>
      <TodoForm onFetchTodos={handleFetchTodos} onAdd={handleAddTodo} />
      {loading ? <H1>Loading...</H1> : <></>}
      {todos.length === 0 ? <H1>No results</H1> : (
        <TodoList todos={todos} onDelete={handleDeleteTodo} onUpdate={handleUpdateTodo} />
      )}      
    </div>
  );
}

export default App;
