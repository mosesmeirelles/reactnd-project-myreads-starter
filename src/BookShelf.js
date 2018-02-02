import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, onUpdateBookShelf } = this.props
    const shelves = [{
      'index': 'currentlyReading',
      'title': 'Currently Reading'
    }, {
      'index': 'wantToRead',
      'title': 'Want to Read'
    }, {
      'index': 'read',
      'title': 'Read'
    }]

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map(shelf => (
              <div className="bookshelf" key={shelf.index}>
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books
                      .filter(book => book.shelf === shelf.index)
                      .map(book => (
                        <li key={book.id}>
                          <Book
                            book={book}
                            onUpdateBookShelf={onUpdateBookShelf}
                          />
                        </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookShelf