import Client from './'

export const getPosts = async () => {
    try {
        const res = await Client.get('/posts')
        console.log(res, 'getting post')
        return res.data
    } catch (error) {
        throw error
    }
}

export const getComments = async (id) => {
    try {
        const res = await Client.get(`/posts/${id}`)
        console.log(res, 'getting comments')
        return res.data.comments
    } catch (error) {
        throw error
    }
}

export const postComment = async (id, comment) => {
    try {
        const res = await Client.post(`/posts/${id}`, comment)
        return res.data
    } catch (error) {
        throw error
    }
}
