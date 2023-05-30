const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017"
const dbase = 'student';
const client = new MongoClient(url);

const dbConnect = async () => {
    try{
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db(dbase);
        return db.collection('stud');
    }
    catch (error){
        console.log("Failed to Connect");
    }
}

module.exports = dbConnect;
