import React from 'react'

import './Book.css'

const Book = (props) => {
  const book = props

  return (
    <div className="book">
      <h3 className="book-title">{book.title}</h3>
      <div className="row">
      <img className="book-cover" alt='cover of book' src={`http://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} />
        <div className="column">
          <div className="content">
            <p className="book-isbn"><span className="label">ISBN:</span> {book.isbn}</p>
            <p className="book-author">{book.author}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book;