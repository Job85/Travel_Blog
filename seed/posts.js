const db = require('../db')
const { Post } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const post = [
        {
            title: 'Costa Rica',
            image: 'https://www.jetmag.com/wp-content/uploads/2017/05/aerial-view.jpg',
            review: 'Warm and sunny'
        }
    ]
    await Post.create(post)
    console.log('Created Post')
}
const run = async () => {
    await main()
    db.close
}

run()