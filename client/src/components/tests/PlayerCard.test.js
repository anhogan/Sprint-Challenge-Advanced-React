import React from 'react';
import { render, waitForElement, getByText } from '@testing-library/react';
import PlayerCard from '../PlayerCard';

test('Player section div renders', () => {
  const { getByTestId } = render(<PlayerCard />);
  getByTestId(/player-section/i);
});

test('Player cards render', async () => {
  const { getByTestId } = render(<PlayerCard />);
  const player = await waitForElement(() => 
    getByTestId(/player-section/i));
  expect(player).toBeInTheDocument();
});

// HOW DO YOU PASS PROPS?