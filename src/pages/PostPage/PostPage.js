import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import PostCard from '../../components/PostCard/PostCard'
import EmptyPostCard from '../../components/EmptyPostCard/EmptyPostCard'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../contexts/GlobalContext'
import { goToLoginPage } from '../../routes/coordinator'

const PostPage = () => {
  const navigate = useNavigate()
  const context = useContext(GlobalContext)

  const { posts, fetchPosts } = context

  useEffect(() => {
    const token = window.localStorage.getItem('labeddit-token')

    if (!token) {
      goToLoginPage(navigate)    
    } else {
      fetchPosts()
    }
  }, [])

  console.log(posts)

  
 
  return (
    <>
        <Header/>
        <EmptyPostCard/>
        {posts.map((post) => {
          return <PostCard
          key={post.id}
          post={post}
          />
        })}
    </>
  )
}

export default PostPage