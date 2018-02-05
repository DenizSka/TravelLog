const express = require('express');

const landmarkRouter = express.Router();
const travelController = require('../controller/travelController');


// landmarkRouter.get('/new', travelController.makeBlankLandmark);
// landmarkRouter.get('/:id/edit', travelController.getOne);

landmarkRouter.route('/:id')
  .get(travelController.getOne)
  .put(travelController.update)
  .delete(travelController.destroy);


landmarkRouter.route('/')
  .get(travelController.index)
  .post(travelController.create);

module.exports = landmarkRouter;
