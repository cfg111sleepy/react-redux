import React from 'react'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../reducers/actions'


export default () => {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchPosts)

    if(!posts.length) 
        return <button
                    onClick={() => dispatch(fetchPosts())} 
                    className='btn btn-primary'>Loading</button>

    return posts.map(item => <Post post={item} key={item} />)

}