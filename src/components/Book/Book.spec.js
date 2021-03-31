import { render, screen } from '@testing-library/react';
import Book from './Book'

describe('Book Component unit tests', () => {
  it('renders a book with props', () => {
    const book = {isbn:'12345', title:'Test Book 1', author:'Arthur McTest'};

      render(<Book 
                isbn={book.isbn}
                title={book.title}
                author={book.author}/>);

      const title = screen.getByText(/Test Book 1/)
      expect(title).toBeInTheDocument();

      const isbn = screen.getByText(/12345/)
      expect(isbn).toBeInTheDocument();

      const author = screen.getByText(/arthur mctest/i)
      expect(author).toBeInTheDocument();

      const image = screen.getByRole('img')
      const imageAltText = screen.getByAltText(/cover of book/)
      expect(image).toBeInTheDocument();
      expect(imageAltText).toBeInTheDocument()

  })
})