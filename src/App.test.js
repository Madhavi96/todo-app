import { render, screen } from '@testing-library/react';
import App from './App';

// app tests begin here
test('renders learn react link', () => {
  render(<App />);
  const titleElement = screen.getByText(/ToDo App/i);
  expect(titleElement).toBeInTheDocument();
});
