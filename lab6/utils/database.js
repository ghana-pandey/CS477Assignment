const MongoClient =require('mongodb').MongoClient;
let _db;
const mongoConnect=(callback)=>{
    MongoClient.connect('mongodb://localhost:27017',{useUnifiedTopology:true})
    .then(client=>{
        console.log("Database server running");
        _db=client.db("BookStore");
        callback();
    }).catch(err=>{throw new Error('Connection Failed')})
    
}
const getDb=()=>{
    if(_db){
        return _db;
    }
    else
    {
        throw new Error("Database needs to be created")
    }
}
exports.mongoConnect=mongoConnect;
exports.getDb=getDb