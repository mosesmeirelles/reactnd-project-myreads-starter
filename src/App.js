import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {}

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelf/>
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
