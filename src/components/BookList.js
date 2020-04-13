import React, { Component } from 'react';
import BookItem from './BookItem';

export class BookList extends Component {

	render() {

		const listBooks = this.props.books.map((book, i) => {
			return (
				<BookItem
				key={i}
				name = {book.volumeInfo.title}
				author = {book.volumeInfo.authors ? book.volumeInfo.authors.join(',') : 'No Author'}
				url = {book.volumeInfo.imageLinks.thumbnail}
				price = {book.saleInfo.saleability === "FOR_SALE" ? `$${book.saleInfo.retailPrice.amount}` : "Not For Sale"}
				description = {book.volumeInfo.description}
				/>
			)
	
		})

		return (
			<div>
				{listBooks}
			</div>
		);
	}
}

export default BookList;
