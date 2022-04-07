import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { LoadComments, PostCommentAction } from '../store/actions/PostActions'
import { useEffect, useState } from 'react'



const mapStateToProps = ({ commentsState }) => {
    return { commentsState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchComments: (id) => dispatch(LoadComments(id)),
        postComments: (id, comment) => dispatch(PostCommentAction(id, comment))
    }
}

const Comments = (props) => {
    const [newComment, setNewComment] = useState({
        name: '',
        rating: '',
        recomendations: '',
        comment: ''
    })

    let { id } = useParams

    useEffect(() => {
        props.fetchComments(id)
    }, [])

    const onChange = (e) => {
        setNewComment({
            ...newComment,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        props.postComment(id, newComment)
        setNewComment({
            name: '',
            rating: '',
            recomendations: '',
            comment: ''
        })
    }
    return (
        <div className='comments'>
            <h1>
                Leave Comment
            </h1>
            <div>
                {props.commentState.comments.map((comment) => (
                    <div className='comment' key={comment._id}>
                        <p>Comments:{comment.comment}</p>

                    </div>
                ))}
                <form onSubmit={onSubmit}>
                    <input
                        name='name'
                        placeholder='name'
                        value={newComment.name}
                        onChange={(e) => onChange(e)}
                    />
                    <input
                        name='rating'
                        placeholder='rating'
                        value={newComment.rating}
                        onChange={(e) => onChange(e)}
                    />
                    <input
                        name='recomendations'
                        placeholder='recomendations'
                        value={newComment.recomendations}
                        onChange={(e) => onChange(e)}
                    />
                    <input
                        name='comment'
                        placeholder='comment'
                        value={newComment.comment}
                        onChange={(e) => onChange(e)}
                    />
                    <button type='submit'>Leave Comment</button>
                </form>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)