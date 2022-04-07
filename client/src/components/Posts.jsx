import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadPosts } from '../store/actions/PostActions'
import { useEffect } from 'react'



const mapStateToProps = ({ postState }) => {
    return { postState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(LoadPosts())
    }
}

const Posts = (props) => {

    useEffect(() => {
        props.fetchPosts()
    }, [])

    return (
        <div>
            <h1>
                Create Post
            </h1>
            {props.postState.posts.map((post) => (
                <ul key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <div>
                        <Link to={`/posts/${post._id}`}>Leave a comment</Link>
                    </div>
                    <img className='pics' src={post.image} alt='image'></img>
                </ul>
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)