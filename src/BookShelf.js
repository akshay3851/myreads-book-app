import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {

	static propTypes = {
		shelf: PropTypes.object.isRequired,
		books: PropTypes.array.isRequired,
		changeShelf: PropTypes.func.isRequired
	}

	render() {

		const { shelf, books, changeShelf } = this.props

		return (
			<div className="bookshelf">
                <h2 className="bookshelf-title">{ shelf.title }</h2>
                <div className="bookshelf-books">
                	<ol className="books-grid">
                		{books.filter((book) => book.shelf === shelf.type).map((book,index) => (
                			<Book book={book} books={books} changeShelf={changeShelf} key={index} />
                		))}
                    </ol>
                </div>
            </div>
		)
	}

}
export default BookShelf