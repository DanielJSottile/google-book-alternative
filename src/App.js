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

	render() {
		return (
			<div className='App'>
				<header className='header'>
					<h1>Google Book Search</h1>
				</header>
				<Search
					updateBooks={this.updateBooks}
					updateError={this.updateError}
				/>
				<div>
				{this.state.error ? this.state.error : ''}
				</div>
				<BookList books={this.state.books}/>
			</div>
		);
	}
}

export default App;
