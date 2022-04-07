const db = require('../db')
const { Comment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const comment = [
        {
            name: '',
            comment: '',
            rating: '',
            recommendations: ''
        },
    ]
    await Comment.insertOne(comment)
    console.log('Commented')
}
const run = async () => {
    await main()
    db.close
}

run()