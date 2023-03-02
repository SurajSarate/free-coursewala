require('dotenv').config();
const connectToMongo=require('./db');
const cors=require('cors');


connectToMongo();
const express=require('express');
const app = express()
app.use(cors());
const port = process.env.PORT || 3002;

app.use(express.json())

//Routes
app.use('/admin', require('./routes/admin'));
app.use('/course', require('./routes/course'));
app.use('/contact', require('./routes/contact'));


app.listen(port, () => {
  console.log(`Mongo Server listening at http://localhost:${port}`)
})

 

if ( process.env.NODE_ENV == "production"){
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}