const graphql = require('graphql');
const { result } = require('lodash');
var _ = require('lodash');

const Horizon = require('../models/horizon');

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
} = graphql;

const db = {
    name: 'MOMO',
    parag: 'hello world'
};

const HorizonType = new GraphQLObjectType({
    name: 'Horizon',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        parag: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        horizon: {
            type: HorizonType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // return db
                // Horizon.find().then(result => console.log(result[0].parag));
                return db;
            }
        },
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});