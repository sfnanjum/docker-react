import { render, screen } from '@testing-library/react';
import App from './App';

import regeneratorRuntime from '@babel/plugin-transform-regenerator';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


