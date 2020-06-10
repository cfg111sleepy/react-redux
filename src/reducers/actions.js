export function createPost(data) {
    return {
        type: 'CREATE_POST',
        payload: data
    }
}

export function fetchPosts() {
    return async dispatch => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await res.json()
        dispatch({
            type: 'FETCH_POSTS',
            payload: json
        })
    }
}