import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CommentCard from '../../components/CommentCard/CommentCard'
import EmptyCommentCard from '../../components/EmptyCommentCard/EmptyCommentCard'
import Header from '../../components/Header/Header'
import PostCard from '../../components/PostCard/PostCard'
import { BASE_URL } from '../../constants/constants'
import { GlobalContext } from '../../contexts/GlobalContext'
import { goToLoginPage } from '../../routes/coordinator'

const CommentPage = () => {
  const navigate = useNavigate()
  const params = useParams()
  const context = useContext(GlobalContext)

  const { posts, fetchPosts } = context

  const [ comments, setComments ] = useState([])
  const [ currentPost , setCurrentPost ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    const token = window.localStorage.getItem('labeddit-token')

    if (!token) {
      goToLoginPage(navigate)

    } else {
      fetchComments()
      fetchCurrentPost()
    }
  }, [])
  
  const fetchComments = async () => {
    try {
      setIsLoading(true)
      const token = window.localStorage.getItem('labeddit-token')

      const config = {
        headers: {
          Authorization: token
        }
      }

      const response = await axios.get(
        BASE_URL + `/comments/${params.postId}`, 
        config
      )
      console.log(response.data)
      setComments(response.data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error(error?.response)
      window.alert("Erro ao buscar os comentários!")
    }
  } 

  // const findPost = (params) => {
  //   const postComment = posts.filter(
  //     (post) => post.id === params.postId       
  //   )
  //   setCurrentPost(postComment)
  // }

  const fetchCurrentPost = async () => {
    try {
      const token = window.localStorage.getItem('labeddit-token')

      const config = {
        headers: {
          Authorization: token
        }
      }

      const response = await axios.get(BASE_URL + `/posts/${params.postId}`, config)
      console.log(response.data)
      setCurrentPost(response.data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error(error?.response?.data?.message)
      window.alert("Erro ao buscar o post!")
    }
  } 
  
  
  return (
    <>
     <Header/>    
      <PostCard post={currentPost}/>     
      <EmptyCommentCard/>
     {comments.map((comment) => {
      return <CommentCard
        key={comment.id}
        comment={comment}
      />
     })}

    </>
  )
}

export default CommentPage