import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchResults from './SearchResults';

describe('SearchResults component test', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <SearchResults />
      </BrowserRouter>
    );
  });
  it('renders container correctly', () => {
    const title = screen.queryByTitle('result__summary');
    expect(title).not.toBeNull();
  });

  it('renders card childs correctly', () => {
    const title = screen.queryByTitle('result__container__card');
    expect(title).toBeNull();
  });
});
