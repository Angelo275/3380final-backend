const express = require('express');
const cors = require('cors');
const parser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(parser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// Replace this with your own MongoDB URL
const uri = 'mongodb://localhost:27017/ArtList';
// const uri = "mongodb+srv://AngeloPal:300363695@cluster0.aqefx3v.mongodb.net/ArtList";

mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database successfully connected");
});


const artRouter = require('./routes/artroute.js');
app.use('/art',artRouter);

app.listen(5000, () => console.log('Example app is listening on port 5000.'));