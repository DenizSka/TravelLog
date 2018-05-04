const db = require('../config/config');

module.exports = {

  findAll() {
    return db.many(`
      SELECT *
        FROM landmarks
      ORDER BY id
    `);
  },

  findById(id) {
    return db.oneOrNone(`
    SELECT * FROM landmarks
    WHERE id = $1
  `, id);
  },

  save(landmark) {
    // console.log('this is landmark in model:', landmarks);
    return db.one(`
       INSERT INTO landmarks (city, name, formatted_address, description) VALUES ($1 ,$2 ,$3, $4) RETURNING *
      `, [landmark.city, landmark.name, landmark.formatted_address, landmark.description]);
  },


  update(landmark, id) {
    return db.one(`
      UPDATE landmarks
      SET
        city = $/city/,
        name = $/name/,
        main = $/formatted_address/,
        wiki = $/description/
      WHERE id = $/id/
      RETURNING *
      `, [landmark.city, landmark.name, landmark.formatted_address, landmark.description, id]);
  },

  destroy(id) {
    return db.none(`
      DELETE
        FROM landmarks
       WHERE id = $1
    `, id);
  },

};

