import React from 'react'
import PostForm from './components/PostForm'
import Posts from './components/Posts'
import FetchPosts from './components/FetchedPost'

function App() {
    return (
        <div className="container pt-3">
            <div className='row'>
                <div className='col'>
                    <PostForm />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h2>sync post</h2>
                    <Posts posts={[]} />
                </div>
                <div className='col'>
                    <h2>async post</h2>
                    <FetchPosts posts={[]} />
                </div>
            </div>
        </div>
    )
}

export default App;
