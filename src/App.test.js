import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main page', () => {
  render(<App />);
  const titleElement = screen.getByText(/Bienvenido a NaturaDECO/i);
  expect(titleElement).toBeInTheDocument();
});
