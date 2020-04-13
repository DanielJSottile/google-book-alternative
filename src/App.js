import React, { Component } from 'react';
import BookList from './components/BookList';
import Search from './components/Search';

import './App.css';

export class App extends Component {
	state = {
		books: [],
		error: null,
		loading: false
	};

	updateError = (err) => {
		if (err) {
			this.setState({
				error: err,
				books: [],
		});
		}
	};

	updateBooks = (result) => {
		this.setState({
			error: null,
			books: result,
		});
	};	

	makeQuery = (term, printType, filter) => {
		const baseURL = 'https://www.googleapis.com/books/v1/volumes';

		term = term ? `?q=${term}`: '';
		filter = filter ? `&filter=${filter}`: '';
		printType = printType ? `&printType=${printType}`: '';

		return `${baseURL}${term}${filter}${printType}`;
	}

	

	apiFetch = (query) => {
		this.setState({loading: true});
		let error;
		fetch(query)
			.then((res) => {
				if (!res.ok) {
					error = res.status
				}
				return res.json();
			})
			.then((data) => {
				if (error) {
					error.message = data.message;
					return Promise.reject(error);
				}
				if (data.totalItems > 0) {
					this.updateBooks(data.items);
					this.setState({loading: false});
				} else {
					error = "No Items Found";
					return Promise.reject(error);
				}
			})
			.catch((err) => {
				this.updateError(err);
				this.setState({loading: false});
			})
	}

	render() {
		return (
			<div className='App'>
				<header className='header'>
					<h1>Google Book Search</h1>
				</header>
				<Search
					makeQuery={this.makeQuery}
					apiFetch={this.apiFetch}
				/>
				<div>
				{this.state.error ? this.state.error : ''}
				</div>
				<div>
				{this.state.loading ? "LOADING. . . .": ''}
				</div>
				<BookList books={this.state.books}/>
			</div>
		);
	}
}

export default App;
