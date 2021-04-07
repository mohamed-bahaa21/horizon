const graphql = require('graphql')
var _ = require('lodash');

const Book = require('../models/book.model')
const Author = require('../models/author.model')

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLInt
} = graphql

// dummy data
// var books = [
//     { name: 'prog method', genre: 'prog', id: '1', authorId: '1' },
//     { name: 'prog abstract', genre: 'prog', id: '2', authorId: '2' },
//     { name: 'prog paradigms', genre: 'prog', id: '3', authorId: '3' },
//     { name: 'DBMS 1', genre: 'prog', id: '4', authorId: '1' },
//     { name: 'DBMS 2', genre: 'prog', id: '5', authorId: '2' },
//     { name: 'comp org', genre: 'prog', id: '6', authorId: '3' },

// ]

// var authors = [
//     { name: 'Mohamed', age: 23, id: '1' },
//     { name: 'Ahmed', age: 32, id: '2' },
//     { name: 'Al-Ghazali', age: 40, id: '3' }
// ]


const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                // code to get data from db or other resource
                // return _.find(authors, { id: parent.authorId })
                return Author.findById(parent.authorId)
            }
        }
    })
})



const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                // code to get data from db or other resource
                // return _.filter(books, { authorId: parent.id })
                return Book.find({ authorId: parent.id })
            }
        }
    })
})



const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db or other resource
                // return _.find(books, { id: args.id })
                return Book.findById(args.id)
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db or other resource
                // return _.find(authors, { id: args.id })
                return Author.findById(args.id)
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                // return books
                return Book.find({})
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                // return authors
                return Author.find({})
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: GraphQLInt }
            },
            resolve(parent, args) {
                let author = new Author({
                    name: args.name,
                    age: args.age
                })
                return author.save()
            }
        },
        addBook: {
            type: BookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                authorId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId
                })
                return book.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})