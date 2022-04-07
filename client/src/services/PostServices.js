import Client from './'

export const GetPosts = async () => {
    try {
        const res = await Client.get('/posts')
        console.log(res, 'getting post')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetComments = async (id) => {
    try {
        const res = await Client.get(`/posts/${id}`)
        console.log(res, 'get comments')
        return res.data.comments
    } catch (error) {
        throw error
    }
}

// export const PostComments = async (postId) => {
//     try {
//         const res = await Client.post(`/posts/${postId}`)
//     }
// }
