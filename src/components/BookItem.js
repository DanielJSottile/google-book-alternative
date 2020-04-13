import React, { Component } from 'react'

export class BookItem extends Component {
  render() {

    return (
      <div>
        <h2>{this.props.name}</h2>
        <img src={this.props.url} alt={this.props.name} />
        <p>Author: {this.props.author}</p>
        <p>Price: {this.props.price}</p>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default BookItem
