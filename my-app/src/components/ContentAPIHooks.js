import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import css from "./css/Content.module.css"
// import PostItem from './PostItem'
import PostItemAPI from './PostItemAPI'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secrets'

function ContentAPIHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);
    const [savedPosts, setSavedPosts] = useState([])

    useEffect(()=>{
        axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`)
        .then( response => {
            setFetchedPosts(response.data.hits)
            setSavedPosts(response.data.hits)
            setIsLoaded(true)
        })
    },[])


    const handleInput = (event) => {
        const filteredPosts = savedPosts.filter(posts => {
            return posts.user.toLowerCase().includes(event.target.value.toLowerCase())
        });
        setFetchedPosts(filteredPosts);
    }

    return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label>Search:</label>
                    <input type='search' id='searchInput' onChange={(event) => handleInput(event)}></input>
                    <h4>posts found: {fetchedPosts.length}</h4>
                </form>
            </div>
            <div className={css.SearchResults}> {
                isLoaded ? (<PostItemAPI savedPosts={fetchedPosts} />) : (<Loader />)
                }
            </div>

        </div>
    )
}

export default ContentAPIHooks
