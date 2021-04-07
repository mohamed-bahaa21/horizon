// import { gql } from "apollo-boost";
import { gql } from "@apollo/client";

export const LOAD_HORIZON = gql`
  query {
    horizon {
        parag
    }
  }
`;

// const getBooksQuery = gql`
//     {
//         books {
//             name
//             id
//         }
//     }
// `
// const getHorizonQuery = gql`
//     {
//         horizon {
//             parag
//         }
//     }
// `
// const getAuthorsQuery = gql`
//     {
//         authors {
//             name
//             id
//         }
//     }
// `

// const addBookMutation = gql`
//     mutation($name:String!, $genre:String!, $authorId:ID!){
//         addBook(name: $name, genre: $genre, authorId: $authorId){
//             name
//             id
//         }
//     }
// `

// const getBookQuery = gql`
//     query($id: ID){
//         book(id: $id){
//             id
//             name
//             genre
//             author{
//                 id
//                 name
//                 age
//                 books {
//                     name
//                     id
//                 }
//             }
//         }
//     }
// `

// export { getBooksQuery, getHorizonQuery, getAuthorsQuery, addBookMutation, getBookQuery }

