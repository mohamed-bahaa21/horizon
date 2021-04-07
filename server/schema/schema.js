const graphql = require('graphql')
var _ = require('lodash');

const Hero = require('../models/hero.model')
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

const HeroType = new GraphQLObjectType({
    name: 'Hero',
    fields: () => ({
        id: { type: GraphQLID },
        parag: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        hero: {
            type: HeroType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db or other resource
                // return _.find(books, { id: args.id })
                // console.log(Hero.findById(args.id));
                return Hero.find({})
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addHero: {
            type: HeroType,
            args: {
                parag: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                let hero = new Hero({
                    parag: args.parag
                })
                return hero.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})