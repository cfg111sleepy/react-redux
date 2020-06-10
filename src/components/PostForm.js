import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../reducers/actions'

class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }   
    }

    submitHandler = e => {
        e.preventDefault()
        const { title } = this.state
        if(!title.trim()) {
            return
        }
        const newPost = {
            title,
            id: Date.now().toString()
        }
        console.log(newPost)
        this.props.createPost(newPost)
        this.setState({ title: ''})
    }   

    changeInputHandler = e => {
        e.persist()
        this.setState(prev => ({ ...prev, ...{
            [e.target.name]: e.target.value
        }}))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className='form-group'>
                    <label htmlFor='Title'>Title post</label>
                    <input
                        name='title'
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                        className='form-control' 
                        id='title' 
                        type='text' />
                </div>
                <button className='btn btn-success' type='submit'>Create</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    createPost: post => dispatch(createPost(post)),
})

export default connect(null, mapDispatchToProps)(PostForm)