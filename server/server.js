const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const app = express()
const schema = require("./schema/schema")
const dotenv = require("dotenv")
dotenv.config({ path: "../.env" })
const cors = require("cors")
app.use(cors())
const path = require("path")


if (process.env.NODE_ENV === 'production') {
    console.log("production mode")
    app.use(express.static(path.resolve(process.cwd(), 'client/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(process.cwd(), 'client/build/index.html'))
    })
} else {
    app.get("/", (req, res) => {
        res.send("Api is Running")
    })
}
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))



const port = process.env.PORT || 5000
app.listen(port, () => console.log(`App is listening on port ${port}`))
