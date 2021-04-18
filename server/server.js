const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const app = express()
const schema = require("./schema/schema")
const dotenv = require("dotenv")
dotenv.config({ path: "../.env" })
const cors = require("cors")
app.use(cors())



app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`App is listening on port ${port}`))
