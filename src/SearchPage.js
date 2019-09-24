import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchPage extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		changeShelf: PropTypes.func.isRequired
	}

	state = {
		query: '',
		booksReturned: []
	}

	searchedBooks = (event) => {
		const inputValue = event.target.value

		if(inputValue) {
			this.setState({
				query: inputValue
			})
			BooksAPI.search(inputValue.trim(), 30).then((response) =>this.setState({
				booksReturned: response
			}))
		}else{
			this.setState({
				booksReturned: []
			})
		}
	}

	render() {
		const { booksReturned } = this.state
		const { books, changeShelf } = this.props
		const hasContent = booksReturned.length > 0
		return (
			<div className="search-books">
            	<div className="search-books-bar">
            		<Link className="close-search" to="/">Close</Link>
            		<div className="search-books-input-wrapper">
                		{/*
		                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
		                  You can find these search terms here:
		                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

		                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
		                  you don't find a specific author or title. Every search is limited by search terms.
		                */}
               			<input type="text" placeholder="Search by title or author" onChange={this.searchedBooks} />
            		</div>
            	</div>
            	<div className="search-books-results">
            	{
            		hasContent && (
            			<div>
            				<h3>Search returned {booksReturned.length} Books</h3>
            				<ol className="books-grid">
              					{booksReturned.map((mappedBook,index) => (
              						<Book 
              						book={mappedBook} 
              						books={books} 
              						changeShelf={changeShelf}
              						key={index}
              						/>
              					)

              					)}
              				</ol>
            			</div>
            		)
            	}
              		
            	</div>
          	</div>
		)
	}

}
export default SearchPage