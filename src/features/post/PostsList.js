import React from 'react'
import {  useSelector } from 'react-redux'
import {  getPostsError, getPostsStatus, selectAllPost } from './postSlice';
import PostExcerpt from './PostExcerpt';

const PostsList = () => {
 
    const posts = useSelector(selectAllPost) ; 
    const postsStatus = useSelector(getPostsStatus) ; 
    const errors = useSelector(getPostsError) ; 
 
     


    let content = '' ; 

    if(postsStatus === 'loading') { 
        content = <p>Loading...</p>
    }else if (postsStatus === 'successed') { 
        const orderdPosts  = posts.slice().sort((a , b )=> b.date.localeCompare(a.date)) ; 
     
        content = orderdPosts.map(post=>(
          <PostExcerpt key= {post.id} post = {post} />
        )); 
    
    }else if (postsStatus === 'failed') {
        content = <p>{errors}</p>
    }

   
    return (
    <section>
     
      {content}
    </section>
  )
}

export default PostsList
