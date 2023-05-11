import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import css from "./css/Content.module.css"
import { savedPosts } from "../posts.json"
import PostItem from './PostItem'
import Loader from './Loader'

function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);

    useEffect(()=>{
        setTimeout(()=>{
            setFetchedPosts(savedPosts)
            setIsLoaded(true)
        },2000)
    },[])


    const handleInput = (event) => {
        const filteredPosts = savedPosts.filter(posts => {
            return posts.name.toLowerCase().includes(event.target.value.toLowerCase())
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
                isLoaded ? (<PostItem savedPosts={fetchedPosts} />) : (<Loader />)
                }
            </div>

        </div>
    )
}

export default ContentHooks
