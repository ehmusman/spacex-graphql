const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const app = express()
const schema = require("./schema/schema")
const dotenv = require("dotenv")
dotenv.config({ path: "../.env" })
const cors = require("cors")
app.use(cors())
const path = require("path")


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))
app.use(express.static("public"))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'))
})


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`App is listening on port ${port}`))
