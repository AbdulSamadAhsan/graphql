const express=require("express");
const {ApolloServer}=require("@apollo/server");
const {expressMiddleware}=require("@as-integrations/express5")
const typeDefs=require("./graphql/schema")
const resolvers=require("./graphql/resolver")
const startServer=async()=>{
    const app=express()
    const server=new ApolloServer({
       typeDefs:typeDefs,
       resolvers:resolvers
    })
    await server.start()
    app.use("/graphql",express.json(),expressMiddleware(server))
    app.listen(4000,()=>{
        console.log("server is running")

    })
}
startServer();