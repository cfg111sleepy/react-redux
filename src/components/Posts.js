import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'

const Posts = ({ syncPosts }) => {
    
    if(!syncPosts.length) return <p className='text-center'>Posts not found</p>

    return syncPosts.map(item => <Post post={item} key={item.id} />)
}

const mapStateToProps = (state) => ({
    syncPosts: state.posts.posts
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)

