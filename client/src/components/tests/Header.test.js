import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../Header';

test('Header renders correctly', () => {
  const { getByText } = render(<Header />);
  getByText(/world cup players/i);
});

test('Toggle switch renders', () => {
  const { getByTestId } = render(<Header />);
  getByTestId(/toggle-switch/i);
});

test('Toggle switch works', () => {
  const { getByTestId } = render(<Header />);
  const toggle = getByTestId(/toggle-switch/i);
  fireEvent.click(toggle);
});