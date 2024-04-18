const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artSchema = new Schema({
  artName: { type: String },
  serial: { type: Number },
  src: { type: String, required: true },
  alt: {type: String},
  bids: [{
        user: {
            type: String, 
            required: true
        }, 
        bid:  {
            type: Number, 
            required: true
        }
    }]
});

const Artmodel = mongoose.model("artrecords", artSchema);
module.exports = Artmodel;