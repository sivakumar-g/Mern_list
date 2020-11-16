const express = require("express");
const mongoose = require("mongoose");
const bodyParser  = require("body-parser");
const cors = require('cors');
const db = require('./config/keys').MONGO_URI;
const path = require('path');
const app = express();

const config = require('./config/keys',{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true}) 

const items = require('./routes/items');

app.use(bodyParser.json());



mongoose
  .connect(db,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,}
  )// Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));
   
 
  /*
mongoose.connect(config.keys)
mongoose.connection.on('connected', () => console.log('connected to database '+  config.keys))
mongoose.connection.on('error', (err)=> console.log(err))
*/

app.use('/items', items);
app.use(cors());
app.use(cors({origin : 'http://localhost:3000'}))


  const port = process.env.PORT || 5000;
  app.listen(port,()=> console.log('server connected at'+ port));

  