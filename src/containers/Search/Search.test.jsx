import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Search from './Search';

it('renders the title correctly', () => {
  render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  );
  const title = screen.getByRole('heading');
  expect(title).not.toBeNull();
});
