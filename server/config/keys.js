module.exports={
     MONGO_URI : 'mongodb+srv://Sivakumar:Sivakumar@sivakumar.czb3d.mongodb.net/mern_list1?retryWrites=true&w=majority'
     // MONGO_URI : 'mongodb://localhost:27017/mern_list1'

    }
  


/* 

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Sivakumar:<password>@sivakumar.czb3d.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

*/