import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import SearchResults from './SearchResults';
import results from '../../../__mocks__/users.json';

jest.mock('axios');

describe('SearchResults component test', () => {
  beforeEach(() => {});
  it('renders container correctly', () => {
    render(
      <BrowserRouter>
        <SearchResults />
      </BrowserRouter>
    );
    const title = screen.queryByTitle('result__summary');
    expect(title).not.toBeNull();
  });

  it('renders card childs correctly', async () => {
    axios.get.mockResolvedValue({ data: results });

    render(
      <BrowserRouter>
        <SearchResults />
      </BrowserRouter>
    );

    const title = await screen.queryAllByTitle('result__container__card');

    expect(title).not.toBeNull();
    cleanup();
  });
});
