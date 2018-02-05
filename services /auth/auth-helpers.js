const bcrypt = require('bcriptjs');

function comparePass(userPassword, databasePassword) {
  return bcyrpt.compareSync(userPassword, databasePassword);
}

module.exports = {
  comparePass,
}
