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

module.exports.getOne = (req, res) => {
  res.status(200).json(req.collection)
};

module.exports.create = (req, res, next) => {
  let collectionOptions = req.body;
  PhotoCollection.create(collectionOptions)
    .then((newPhotoCollection) => {
      res.status(200).json(newPhotoCollection);
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  req.collection.remove()
    .then((removedCollection) => {
      res.status(200).json(removedCollection)
    })
    .catch(next);
};

module.exports.addPhoto = (req, res, next) => {
  let photo = req.body;
  req.collection.addPhoto(photo)
    .then((updatedPhotoCollection) => {
      res.status(200).json(updatedPhotoCollection);
    })
    .catch(next);
};

