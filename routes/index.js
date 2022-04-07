const { Router } = require('express')
const controllers = require('../controllers/index')
const router = Router()

router.get('/', (req, res) => {
    res.send({ msg: 'Server Running' })
})

router.get('/posts', controllers.post.getAllPosts)
router.get('/posts/:id', controllers.post.getPostById)

router.post('/posts', controllers.post.createPost)
router.post('/posts/:id', controllers.comment.postComment)

module.exports = router