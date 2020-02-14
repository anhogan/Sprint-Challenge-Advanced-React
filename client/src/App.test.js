import React from 'react';
import ReactDOM from 'react-dom';
import { render, waitForElement, getByText } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Player section div renders', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/player-section/i);
});

test('Player cards render', async () => {
  const { getByText } = render(<App />);
  const player = await waitForElement(() => // Cannot read property length of undefined
    getByText('.player-section', /alex morgan/i),
    {container: '.player-section'});
  expect(player).toBeInTheDocument();
});