const dbUsers = require('./database/users')

module.exports = {
  findById: dbUsers.findById,
  findByEmail: dbUsers.findByEmail,  
  findByName: dbUsers.findByName,
  create: dbUsers.create,
  update: dbUsers.update,
  updatePhoto: dbUsers.updatePhoto
}
