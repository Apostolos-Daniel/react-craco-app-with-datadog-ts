import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          Amount: 10,
        }),
    } as Response);
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

test("renders paid note", async () => {
  render(<App />);
  const button = screen.getByText(/💸 Pay 💸/i);
  fireEvent.click(button);

  const txtPaid = await screen.findByText(/Paid £10/i);
  expect(txtPaid).toBeInTheDocument();
});