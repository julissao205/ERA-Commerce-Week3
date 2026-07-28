const {MongoClient} = require("mongodb");
let db;

async function connectMongo() {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    db = client.db("ecommerce_db");
    console.log("mongodb connected");
}

function getMongo() {
    return db;
}

module.exports = {connectMongo, getMongo};