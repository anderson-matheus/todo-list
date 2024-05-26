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
    expect(screen.getByPlaceholderText('Enter todo title *')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter todo completed date')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter todo description *')).toBeInTheDocument();
    expect(screen.getByText('Priority *')).toBeInTheDocument();
    expect(screen.getByText('Low')).toBeInTheDocument();
    expect(screen.getByText('Medium')).toBeInTheDocument();
    expect(screen.getByText('Hight')).toBeInTheDocument();
    expect(screen.getByText('Completed:')).toBeInTheDocument();
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
      {
        id: 1,
        title: 'Todo 1',
        description: 'Todo description 1',
        priority: 'LOW',
        completedDate: '2024-05-25T00:00:00.000Z',
        completed: false,
      },
      {
        id: 2,
        title: 'Todo 2',
        description: 'Todo description 2',
        priority: 'MEDIUM',
        completedDate: '2024-05-26T00:00:00.000Z',
        completed: true,
      }
    ];
    mockAxios.onGet(`${process.env.REACT_APP_API_URL}/todos`).reply(200, todos);
    render(<App />);
    await waitFor(() => {
      expect(screen.getByDisplayValue('Todo 1')).toBeInTheDocument();
      expect(screen.getByDisplayValue('Todo description 1')).toBeInTheDocument();
      expect(screen.getByDisplayValue('LOW')).toBeInTheDocument();
      expect(screen.getByDisplayValue('2024-05-25')).toBeInTheDocument();
      expect(screen.getByDisplayValue('2024-05-25')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByDisplayValue('Todo 2')).toBeInTheDocument();
      expect(screen.getByDisplayValue('Todo description 2')).toBeInTheDocument();
      expect(screen.getByDisplayValue('MEDIUM')).toBeInTheDocument();
      expect(screen.getByDisplayValue('2024-05-26')).toBeInTheDocument();
    });
  });
});