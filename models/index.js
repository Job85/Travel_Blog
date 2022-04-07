const mongoose = require('mongoose')
const CommentSchema = require('./comments')
const PostSchema = require('./posts')

const Comment = mongoose.model('comments', CommentSchema)
const Post = mongoose.model('posts', PostSchema)


module.exports = {
    Post,
    Comment
};