import { render, screen } from '@testing-library/react';
import App from './App';

test('renders our hero component', () => {
  render(<App />);
  const heroElement = screen.getByText(/Welcome to our Book Store/i);
  // screen.debug();
  expect(heroElement).toBeInTheDocument();
});
