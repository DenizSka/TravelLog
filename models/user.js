const db = require('../config/config');

const User = {};

User.findByUserName = userName => db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
    `, userName);

User.create = user => db.one(`
    INSERT INTO users
    (username, email, password)
    VALUES ($/username/, $/email/, $/password/)
    RETURNING *
    `, user);

module.exports = User;
