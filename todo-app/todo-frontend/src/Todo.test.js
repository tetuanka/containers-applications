import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

test('renders Todo component correctly', () => {
  render(<Todo text="Write code" done={true} />);
  const todoElement = screen.getByText(/Write code/i);
  expect(todoElement).toBeInTheDocument();
});