import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders landing page', () => {
  render(<App />);
  expect(screen.getByRole('heading')).toHaveTextContent(/Characters From Rick and Morty/);
});
