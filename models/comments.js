const { Schema } = require('mongoose')


const CommentSchema = new Schema(
    {
        name: { type: String, required: true },
        comment: { type: String, required: true },
        rating: { type: String, required: true },
        recomendations: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = CommentSchema