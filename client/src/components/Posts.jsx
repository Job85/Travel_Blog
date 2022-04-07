import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadPosts } from '../store/actions/PostActions'
import { useEffect } from 'react'


const mapStateToProps = ({ postsState }) => {
    return { postsState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(LoadPosts())
    }
}

const Post = (props) => {

    useEffect(() => {
        props.fetchPosts()
    }, [])

    return (
        <div>
            {props.postsState.posts.map((post) => (
                <div className='post' key={post.id}>
                    <h2>{post.title}</h2>
                    <p className='description'>{post.description}</p>
                    <img className='pic' src={post.image} alt='' />
                    <div>
                        <Link className='comment-link' to={`/posts/${post._id}`}>
                            Leave a comment
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)