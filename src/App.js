import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import BooksPage from './BooksPage'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     books: []
  }

componentDidMount(){
  BooksAPI.getAll().then((books) => {
    this.setState({
      books
    })
  }
)}

changeShelf = (bookToUpdate, shelf) => {
  BooksAPI.update(bookToUpdate, shelf).then((response) => {
    bookToUpdate.shelf = shelf
    this.setState((prevState) => ({
      books: prevState.books.filter(book => book.id !== bookToUpdate.id).concat(bookToUpdate)
    }))
  })
}

  render() {
    const { books } = this.state
    return (
      <div className="app">
        <Route path="/search" render={() => <SearchPage />} />            
        <Route exact path="/" render={() => <BooksPage books={books} changeShelf={this.changeShelf} />} />
      </div>
    )
  }
}

export default BooksApp
