import React, { Component } from 'react';

export class Search extends Component {
	render() {

		const handleSubmit = (e) => {
			e.preventDefault();
			const term = e.target.searchInput.value;
			const printType = e.target.printType.value;
			const filter = e.target.filter.value;

			const query = this.props.makeQuery(term, printType, filter)
			this.props.apiFetch(query);
		};

		return (
			<section className='search'>
				<form action='#' id='search-bar' onSubmit={handleSubmit}>
					<label htmlFor='search-input'>Search</label>
					<input
						required
						type='text'
						name='searchInput'
						id='search-input'
						placeholder='Search Term'
					/>
					<label htmlFor='printType'>Print Type:</label>
					<select name="printType" id="printType"> 
						<option value="" defaultValue>None</option>
       			<option value="all">All</option> 
        		<option value="books">Books</option> 
        		<option value="magazines">Magazines</option> 
					</select> 
					<label htmlFor='filter'>Filter:</label>
					<select name="filter" id="filter"> 
						<option value="" defaultValue>None</option> 
       			<option value="ebooks">eBooks</option> 
        		<option value="free-ebooks">Free eBooks</option> 
        		<option value="full">Full</option> 
						<option value="paid-ebooks">Paid eBooks</option>
						<option value="partial">Partial</option> 
    			</select> 
					<button type='submit'>Submit</button>
				</form>
			</section>
		);
	}
}

export default Search;
