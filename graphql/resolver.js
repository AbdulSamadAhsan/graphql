function resolveQueryMe(){
    return{
        name:"Kaif kamran",
        age:24

    };
}
const resolvers={
    Query:{
        me:resolveQueryMe

    }
}
module.exports=resolvers