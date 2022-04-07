const { Schema } = require('mongoose')


const PostSchema = new Schema(
    {
        title: { type: String, required: true },
        img: { type: String, required: true },
        review: { type: String, required: true },
        comments: [{ type: Schema.Types.ObjectId, ref: 'comments' }]
    },
    { timestamps: true }
)


module.exports = PostSchema