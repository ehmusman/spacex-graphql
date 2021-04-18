const graphql = require("graphql");
const axios = require("axios")
const {
    GraphQLBoolean,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID
} = graphql

///////////////////////////////////////////////////////////////////////
// schema types
const LaunchType = new GraphQLObjectType({
    name: "Launch",
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_date_utc: { type: GraphQLString },
        launch_success: { type: GraphQLBoolean },
        details: { type: GraphQLString },
        rocket: { type: RocketType },
        launch_site: { type: LaunchSiteType },
        links: { type: LinksType }
    })
})

const RocketType = new GraphQLObjectType({
    name: "Rocket",
    fields: () => ({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString }
    })
})

const LaunchSiteType = new GraphQLObjectType({
    name: "LaunchSite",
    fields: () => ({
        site_name_long: { type: GraphQLString }
    })
})

const LinksType = new GraphQLObjectType({
    name: "Links",
    fields: () => ({
        mission_patch: { type: GraphQLString },
        article_link: { type: GraphQLString },
        wikipedia: { type: GraphQLString },
        video_link: { type: GraphQLString }
    })
})

/////////////////////////////////////////////////////////
// root query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        launches: {
            type: GraphQLList(LaunchType),
            resolve(parent, args) {
                return axios.get("https://api.spacexdata.com/v3/launches")
                    .then(res => res.data)
            }
        },
        launch: {
            type: LaunchType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return axios.get(`https://api.spacexdata.com/v3/launches/${args.id}`)
                    .then(res => res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})