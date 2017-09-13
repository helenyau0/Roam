const post = require('./database/posts')

module.exports = {
  getByUserId: post.getByUserId,
  insertPost: post.insertPost,
  getByCityId: post.getByCityId,
  getById: post.getById,
  updatePost: post.updatePost
}