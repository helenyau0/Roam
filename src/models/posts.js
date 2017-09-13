const dbPosts = require('./database/posts')

module.exports = {
  findByUserId: dbPosts.findByUserId,
  findByCityId: dbPosts.findByCityId,
  create: dbPosts.create,
  findById: dbPosts.findById,
  update: dbPosts.update,
  remove: dbPosts.remove
}