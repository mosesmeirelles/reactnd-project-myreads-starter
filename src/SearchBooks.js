import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    booksSearched: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })

    BooksAPI.search(query.trim()).then(booksResult => {
      let booksSearched = booksResult.map(book => {
        let shelfBook = this.props.books.find(shelfBook => shelfBook.id === book.id)

        if (shelfBook) {
          book.shelf = shelfBook.shelf
        }

        return book
      })

      this.setState({ booksSearched });
    }).catch(e => {
      this.setState({ booksSearched: [] });
    })
  }

  render() {
    const { onUpdateBookShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.booksSearched.map(book => (
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
    )
  }
}

export default SearchBooks