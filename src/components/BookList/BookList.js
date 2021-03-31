import React from 'react'
import Book from '../Book/Book'

import './BookList.css'

const BookList = (props) => {
  const books = props.books
  console.log(`The books passed to the booklist are ${props.books}`)
  return (
    <div className="bookList">
      <ul>
        {books.map(b => (
          <li key={b.id}>
            <Book 
              isbn={b.isbn}
              title={b.title}
              author={b.author}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookList