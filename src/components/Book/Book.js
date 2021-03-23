import React from 'react'

import './Book.css'

const book = (props) => {
  const book = props
  return (
    <div className="book">
      <h3 className="book-title">{book.title}</h3>
      <p className="book-isbn">ISBN: {book.isbn}</p>
      <p className="book-author">{book.author}</p>
    </div>
  )
}

export default book;