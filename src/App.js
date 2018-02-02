import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf

      // Instead of update the book, I just remove and set again the object
      this.setState(state => ({
        books: state.books
                      .filter(oldBook => oldBook.id !== book.id)
                      .concat([ book ])
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelf
            books={this.state.books}
            onUpdateBookShelf={this.changeBookShelf}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks
            books={this.state.books}
            onUpdateBookShelf={this.changeBookShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
