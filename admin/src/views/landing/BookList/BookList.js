import React, { Component } from 'react';
import { graphql } from "react-apollo";

import { getBooksQuery } from "../../../queries/queries";
import "./BookList.css"

class BookList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: null
        }
    }

    displayBooks = () => {
        var data = this.props.data
        if (data.loading) {
            return (<div>Loading Books...</div>)
        } else {
            return data.books.map(book => {
                return (
                    <li>{book.name}</li>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Book Shelf</h1>
                <ul id="book-list">
                    {this.displayBooks()}
                </ul>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
