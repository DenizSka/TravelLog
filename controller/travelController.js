const landmarkDB = require('../models/landmarkDB');

module.exports = {

  index(req, res, next) {
    landmarkDB.findAll()
      .then((landmarks) => {
        res.status(200).json({
          message: 'success',
          data: {
            landmarks,
          },
        });
      })
      .catch(err => next(err));
  },

  getOne(req, res, next) {
    landmarkDB.findById(req.params.id)
      .then((landmark) => {
        // console.log(landmark);
        res.json({
          message: 'ok',
          data: { landmark },
        });
      })
      .catch(err => next(err));
  },

  create(req, res, next) {
    console.log('in create function');
    landmarkDB.save({
      name: req.body.name,
      city: req.body.city,
      formatted_address: req.body.formatted_address,
      description: req.body.description,
    })
      .then((landmark) => {
        console.log(`this is the thing I want to see ${json.stringify(landmark)}`);
        res.json({
          message: 'landmark added successfully!',
          data: { landmark },
        });
      })
      .catch(err => next(err));
  },

  update(req, res, next) {
    landmarkDB.update({
      name: req.body.name,
      city: req.body.city,
      formated_address: req.body.formatted_address,
      description: req.body.description,
    }, req.params.id).then((landmark) => {
      console.log(landmark, 'after post');
      res.json({
        message: 'Landmark updated successfully!',
        data: { landmark },
      });
    }).catch(err => next(err));
  },

  destroy(req, res, next) {
    landmarkDB.destroy(req.params.id)
      .then(() => {
        res.json({
          message: 'Landmark has been deleted',
        });
      })
      .catch(err => next(err));
  },

};
