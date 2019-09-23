import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BooksPage extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		changeShelf: PropTypes.func.isRequired
	}

	render() {
		const { books, changeShelf } = this.props
		const shelfs = [
			{type: 'currentlyReading', title: 'Currently Reading'},
			{type: 'wantToRead', title: 'Want to Read'},
			{type: 'read', title: 'Read'}
		]		
		return (
			<div className="list-books">
				<div className="list-books-title">
              		<h1>MyReads</h1>
            	</div>
            	<div className="list-books-content">
            		{
            			shelfs.map((shelf,index) => (
            				<BookShelf shelf={shelf} books={books} changeShelf={changeShelf} key={index}/>
            				))
            		}
            	</div>
            	<div className="open-search">
            		<Link className="button-link" to="/search">Add a book</Link>
            	</div>
			</div>
		)
	}
}
export default BooksPage