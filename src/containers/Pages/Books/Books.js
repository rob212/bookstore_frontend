import React, { Component } from 'react'
import BookList from '../../../components/BookList/BookList'
import axios from '../../../utils/axios'

import '../../../App.css'
import './Books.css'

class Books extends Component {
  state = {
    books: [],
    error: false,
  };

  componentDidMount() {
    // const books = [
    //   {
    //     "isbn": "9780321534460",
    //     "title": "Agile Testing: A Practical Guide for Testers and Agile Teams",
    //     "author": "Lisa Crispin",
    //     "id": 1
    //   },
    //   {
    //     "isbn": "0321803027",
    //     "title": "How Google Tests Software",
    //     "author": "James A. Whittaker",
    //     "id": 2
    //   },
    //   {
    //     "isbn": "1937785025",
    //     "title": "Explore It!: Reduce Risk and Increase Confidence with Exploratory Testing",
    //     "author": "Elisabeth Hendrickson",
    //     "id": 3
    //   }
    // ]
    axios.get('/books')
    .then((response) => {
      const books = response.data;
      this.setState({ books: books });
    })
    .catch((e) => {
      console.log(`Something went wrong with the axios call to the server: ${e}`)
      this.setState({error: true})
    })
  }

 render() {
   const books = this.state.books
   if (!this.state.error) {
     return (
       <div className="books">
         <div className="books-text">
           <h1>Books</h1>
           <BookList books={books}/>
         </div>
       </div>
     )
   } else {
     return ( 
       <div className="error">
         <p>Something went wrong, we recieved an error from the server.</p>
       </div>
     )
   }
 }
}

export { Books }