import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from '../App';

const mockAxios = new MockAdapter(axios);

describe('App component', () => {
  beforeEach(() => {
    mockAxios.reset();
  });

  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders TodoForm component', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Enter todo text')).toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });

  test('displays loading message while fetching todos', async () => {
    render(<App />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('displays error toast message when fetching todos fails', async () => {
    mockAxios.onGet(`${process.env.REACT_APP_API_URL}/todos`).reply(500, 'Internal Server Error');
    render(<App />);
    await waitFor(() => {
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  test('renders TodoList component with correct props when todos are fetched successfully', async () => {
    const todos = [
      { id: 1, text: 'Todo 1', completed: false },
      { id: 2, text: 'Todo 2', completed: true }
    ];
    mockAxios.onGet(`${process.env.REACT_APP_API_URL}/todos`).reply(200, todos);
    render(<App />);
    await waitFor(() => {
      expect(screen.getByDisplayValue('Todo 1')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByDisplayValue('Todo 2')).toBeInTheDocument();
    });
    
  });
});