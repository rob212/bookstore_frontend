import React from 'react'

import './Book.css'

const Book = (props) => {
  const book = props

  return (
    <div className="book">
      <img className="book-cover" alt='cover of book' src={`http://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} />
      <h3 className="book-title">{book.title}</h3>
      <p className="book-isbn">ISBN: {book.isbn}</p>
      <p className="book-author">{book.author}</p>
    </div>
  )
}

export default Book;