import React, { Component } from 'react';
import { graphql } from "react-apollo";

import { getBooksQuery, getHorizonQuery } from "../../../queries/queries";
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

    displayHorizon = () => {
        var data = this.props.data
        if (data.loading) {
            return (<div>Loading Horizon...</div>)
        } else {
            return (
            <h3>{data.name}</h3>
            )
        }
    }

    render() {
        return (
            <div>
                <h1>Book Shelf</h1>
                {this.displayHorizon()}
                <ul id="book-list">
                    {/* {this.displayBooks()} */}
                </ul>
            </div>
        );
    }
}

export default graphql(getHorizonQuery)(BookList);
