import React, { Component } from 'react'
import css from "./css/Content.module.css"
// import { savedPosts } from "../posts.json"
// import PostItem from './PostItem'
import PostItemAPI from './PostItemAPI'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secrets'

export class ContentAPI extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: [],
            savedPosts: []
        }
    }

    componentDidMount() {
        this.fetchImages()
    }

    async fetchImages() {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
        const fetchedPosts = response.data.hits;
        this.setState({
            posts: fetchedPosts,
            isLoaded: true,
            savedPosts: fetchedPosts
        })
    }

    handleInput = (event) => {
        const filteredPosts = this.state.savedPosts.filter(posts => {
            return posts.user.toLowerCase().includes(event.target.value.toLowerCase())
        })
        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label>Search:</label>
                        <input type='search' id='searchInput' onChange={(event) => this.handleInput(event)}></input>
                        <h4>posts found: {this.state.posts.length}</h4>
                    </form>
                </div>
                <div className={css.SearchResults}> {
                    this.state.isLoaded ? (<PostItemAPI savedPosts={this.state.posts} />) : (<Loader />)
                    }
                </div>

            </div>
        )
    }
}

export default ContentAPI
