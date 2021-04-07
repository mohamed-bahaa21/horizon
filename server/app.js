const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 8000

// allow cross-origin requests
app.use(cors())

mongoose.connect(
    'mongodb+srv://mohammad123:mohammad123@blogdb.fslqm.mongodb.net/bookShelf?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
)
mongoose.connection.once('open', () => {
    console.log('MongoDB Connected');
})

app.use('/___graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => console.log(`Server: ${PORT}`))