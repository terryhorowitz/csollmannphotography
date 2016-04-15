'use strict';

let express = require('express');
let router = express.Router();

module.exports = router;

let controller = require('./photoCollections.controller');

router.param('id', controller.load);

router.get('/', controller.getAll);

router.post('/', controller.create);

router.put('/:id', controller.addPhoto);
