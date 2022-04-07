import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { LoadComments } from '../store/actions/PostActions'
import { useEffect } from 'react'



const mapStateToProps = ({ commentsState }) => {
    return { commentsState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchComments: (id) => dispatch(LoadComments(id))
    }
}

const Comments = (props) => {
    let { id } = useParams

    useEffect(() => {
        props.fetchComments(id)
    }, [])



    const Comments = () => {
        return (
            <div className='comments'>
                <h1>
                    Leave Comment
                </h1>
                {props.commentState.comments.map((comment) => (
                    <ul key={comment._id}>
                        <h2>{comment.name}</h2>

                    </ul>))}
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments)