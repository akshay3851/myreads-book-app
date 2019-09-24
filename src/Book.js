import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    }

    updateShelf = (event) => this.props.changeShelf(this.props.book, event.target.value);

    render() {

        const {book, books} = this.props
        const title = book.title !== null ? book.title : 'No title'

        // set current shelf to none as default
        let currentShelf = 'none';

        // if book is in current list, set current shelf to book.shelf
        for (let item of books) {
            if (item.id === book.id) {
                currentShelf = item.shelf;
                break;
            }
        }
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={
                            { 
                                width: 128, 
                                height: 193,
                                backgroundImage: `url(${book.imageLinks.thumbnail})` 
                            }}>
                        </div>
                        <div className="book-shelf-changer">
                            <select onChange={this.updateShelf} defaultValue={currentShelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                        </div>
                        <div className="book-title">{title}</div>
                        <div className="book-authors" key>{book.authors}</div>             
                </div>
            </li>
        )
    }
}
export default Book