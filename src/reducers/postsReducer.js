const initState = {
    posts: [],
    fetchPosts: []
}

export const postsReducer = (state = initState, action) => {

    switch(action.type) {

        case 'CREATE_POST':
            return { ...state, posts: [...state.posts, action.payload] }

        case 'FETCH_POSTS': 
            return { ...state, fetchPosts: action.payload}

        default: 
            return state
    }
}