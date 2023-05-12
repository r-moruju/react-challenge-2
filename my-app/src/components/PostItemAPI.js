import React from 'react'
import css from "./css/PostItem.module.css"

function PostItemAPI(props) {
    return (
        props.savedPosts.map(post => {
            return (
                <div className={css.SearchItem} key={post.id}>
                    <p>{post.type}</p>
                    <p>{post.user}</p>
                    <img src={post.webformatURL} alt=''></img>
                    <p>{post.tags}</p>
                </div>
            )
        })
    )

}

export default PostItemAPI
