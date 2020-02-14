// import React from 'react';
// import { render, waitForElement, getByText } from '@testing-library/react';
// import PlayerCard from '../PlayerCard';

// test('Player section div renders', (props) => {
//   const { getByTestId } = render(<PlayerCard {...props.players} />);
//   getByTestId(/player-section/i);
// });

// test('Player cards render', async (props) => {
//   const { getByText } = render(<PlayerCard {...props.players} />);
//   const player = await waitForElement(() => 
//     getByText(container, /alex morgan/i),
//     {container});
//   expect(player).toBeInTheDocument();
// });