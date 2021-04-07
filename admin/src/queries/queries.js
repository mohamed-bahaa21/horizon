import { gql } from "apollo-boost";

const getHeroQuery = gql`
    {
        hero {
            parag
            id
        }
    }
`
const addHeroMutation = gql`
    mutation($parag:String!){
        addHero(parag: $parag){
            parag
            id
        }
    }
`

const getPostQuery = gql`
    query($id: ID){
        post(id: $id){
            id
            name
            genre
            author{
                id
                name
                age
                posts {
                    name
                    id
                }
            }
        }
    }
`

export { getHeroQuery, addHeroMutation, getPostQuery }