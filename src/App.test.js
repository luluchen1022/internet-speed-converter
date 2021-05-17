import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Network Speed Converter', () => {
  render(<App />);
  const Title = screen.getByText(/Network Speed Converter/);
  expect(Title).toBeInTheDocument();
});
