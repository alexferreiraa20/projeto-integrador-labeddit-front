import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import PostCard from '../../components/PostCard/PostCard'
import EmptyPostCard from '../../components/EmptyPostCard/EmptyPostCard'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../contexts/GlobalContext'
import { goToLoginPage } from '../../routes/coordinator'
import { PostPageContainer } from './PostPage.Style'
import { BASE_URL } from '../../constants/constants'
import axios from 'axios'

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

  const [liked, setLiked] = useState(false)
  const [disliked, setDisLiked] = useState(false)
 
  const handleRefresh = () => {
      // by calling this method react re-renders the component
      this.setState({});
    }  
  const handleLike = (id) => {
      const body = {
          like: true
      }
      likeDislikePost(id,body)
      setLiked(!liked)
      setDisLiked(disliked)
      // fetchPosts()
    }

    const handleDislike = (id) => {
      const body = {
          like: false
      }
      likeDislikePost(id,body)
      setDisLiked(!disliked)
      setLiked(liked)
      // handleRefresh()
      }

    const likeDislikePost = async (id, body) => {
      try {

        const token = window.localStorage.getItem('labeddit-token');

        const config = {
          headers: {
            Authorization: token
          }
        }
      
        const response = await axios.put(BASE_URL + `/posts/${id}/like`, body, config)

        console.log(response)
 
      } catch (error) {
        console.error(error?.response)
        window.alert(error?.response?.data)
      }
    }    
  
    useEffect(() => {
      fetchPosts()
     }, [ liked, disliked ])  
 
  return (
    <PostPageContainer>
        <Header/>
        <EmptyPostCard/>
        {posts.map((post) => {
          return <PostCard
          key={post.id}
          post={post}
          handleLike={handleLike}
          handleDislike={handleDislike}
          liked={liked}
          disliked={disliked}
          likeDislikePost={likeDislikePost}
          postCreatorNickName={post.creator.nickName}
          postContent={post.content}
          />
        })}
    </PostPageContainer>
  )
}

export default PostPage