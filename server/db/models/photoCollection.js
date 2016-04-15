'use strict';
let mongoose = require('mongoose');
let _ = require('lodash');

let schema = new mongoose.Schema({
  name: {
    type: String
  },
  urls: [ String ]
});

schema.methods.addPhoto = () => {
  //fill in s3 things here.
};




mongoose.model('PhotoCollection', schema);
