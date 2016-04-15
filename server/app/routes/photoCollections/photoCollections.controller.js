'use strict';

let mongoose = require('mongoose');
let PhotoCollection = mongoose.model('PhotoCollection');

module.exports.load = (req, res, next, id) => {
  PhotoCollection.findById(id)
    .then((collection) => {
      req.collection = collection;
      next();
    }, next);
};

module.exports.getAll = (req, res, next) => {
  PhotoCollection.find({})
    .then((photoCollections) => {
      res.status(200).json(photoCollections);
    })
    .catch(next);
};

module.exports.create = (req, res, next) => {
  let collectionOptions = req.body;
  PhotoCollection.create(collectionOptions)
    .then((newPhotoCollection) => {
      res.status(200).json(newPhotoCollection);
    })
    .catch(next);
};

module.exports.addPhoto = (req, res, next) => {
  let photo = req.body.photo;
  req.collection.addPhoto(photo)
    .then((updatedPhotoCollection) => {
      res.status(200).json(updatedPhotoCollection);
    })
    .catch(next);
};

