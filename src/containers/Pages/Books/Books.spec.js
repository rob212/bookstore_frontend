import { Books } from './Books';
import { screen, render } from '@testing-library/react';
import axios from '../../../utils/axios';
// import axios from 'axios';

jest.mock('../../../utils/axios');

afterEach(() => {
  jest.clearAllMocks();
});

describe('Testing the Books page', () => {
  it('populates Book List with data returned from API', () => {
    
    axios.get.mockResolvedValueOnce(Promise.resolve({ data: [
      {
            "isbn": "123456",
            "title": "Agile Testing: A Practical Guide for Testers and Agile Teams",
            "author": "Lisa Crispin",
            "id": 1
          }
    ] }));

    render(<Books />)
    const bookList = screen.getByRole('list')
    expect(bookList).toBeInTheDocument();
    screen.debug();
  })
})