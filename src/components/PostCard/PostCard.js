import { useContext, useEffect, useState } from 'react'
import ballon from '../../assets/comment-button.svg'
import { ArrowUpIcon, ArrowUpFillIcon } from '../Icons/ArrowUpIcon'
import { ArrowDownFillIcon, ArrowDownIcon } from '../Icons/ArrowDownIcon'
import {
    Box,
    Text,
    Image,
    Flex,
    Center,
    HStack,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { goToCommentPage } from '../../routes/coordinator'
import { GlobalContext } from '../../contexts/GlobalContext'

export default function PostCard({ post, handleLike, handleDislike, liked, disliked, likeDislikePost  }) {
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const { fetchPosts } = context

    
    // const [liked, setLiked] = useState(false)
    // const [disliked, setDisLiked] = useState(false)
   
    // // const handleRefresh = () => {
    // //     // by calling this method react re-renders the component
    // //     this.setState({});
    // //   }  
    // const handleLike = (id) => {
    //     const body = {
    //         like: true
    //     }
    //     likeDislikePost(id,body)
    //     setLiked(!liked)
    //     setDisLiked(disliked)
    //     // fetchPosts()
    //   }

    //   const handleDislike = (id) => {
    //     const body = {
    //         like: false
    //     }
    //     likeDislikePost(id,body)
    //     setDisLiked(!disliked)
    //     setLiked(liked)
    //     // handleRefresh()
    //     }
        

    //   const likeDislikePost = async (body) => {
    //     try {

    //       const token = window.localStorage.getItem('labeddit-token');

    //       const config = {
    //         headers: {
    //           Authorization: token
    //         }
    //       }
        
    //       await axios.put(BASE_URL + `/posts/${post.id}/like`, body, config)
   
    //     } catch (error) {
    //       console.error(error?.response)
    //       window.alert(error?.response?.data)
    //     }
    //   }
      
    
      useEffect(() => {
        fetchPosts()
        // refreshPage()
       }, [ liked, disliked ])

    return (
        <Center pt={2}>
            <Box
                w="364px"
                borderRadius={'12px'}
                overflow={'hidden'}
                bg="#FBFBFB"
                border={'1px'}
                borderColor="#E0E0E0"
            >
                <Box py={1} px={2}>
                    <Box
                        display={'inline-block'}
                        w={"100%"}
                        h={'16px'}
                        color="#6F6F6F"
                        mb={4}
                    >
                        <Text
                            fontSize={'12px'}
                            fontFamily={'IBM Plex Sans'}
                            fontStyle='normal'
                            fontWeight='400'
                        >
                            Enviado por: {post?.creator?.nickName}
                        </Text>
                    </Box>
                    <Box mb={4}>
                        <Text color={'gray.500'} noOfLines={2}>
                           {post?.content}
                        </Text>
                    </Box>
                </Box>
                <HStack>
                    <HStack
                        w={'105px'}
                        minH={'28px'}
                        border={'1px solid #ECECEC'}
                        borderRadius={'28px'}
                        justifyContent={'space-between'}
                        m={2}
                    >
                        <Flex
                            p={1}
                            cursor="pointer"
                            onClick={() => handleLike(post.id)}
                        >
                            {liked ? (
                                <ArrowUpFillIcon fill="#008000" fontSize={'24px'} /> 
                            ) : (
                                <ArrowUpIcon fontSize={'24px'} />
                            )}
                        </Flex>
                        <Box
                            p={1}
                            cursor="pointer"
                            
                        >
                            <Text 
                                fontSize={'9.5px'}
                                fontFamily={'IBM Plex Sans'}
                                fontStyle='normal'
                                fontWeight='400'color={'gray.500'}
                            >
                                {post?.likes}
                            </Text>
                            <Text 
                                fontSize={'9.5px'}
                                fontFamily={'IBM Plex Sans'}
                                fontStyle='normal'
                                fontWeight='400'color={'gray.500'}
                            >
                                {post?.dislikes}
                            </Text>
                        </Box>
                        <Flex
                            p={1}
                            cursor="pointer"
                            onClick={() => handleDislike(post.id)}
                        >
                            {disliked ? (
                                <ArrowDownFillIcon fill="#ff0000" fontSize={'24px'} /> 
                            ) : (
                                <ArrowDownIcon fontSize={'24px'} />
                            )}
                        </Flex>
                    </HStack>
                    <HStack
                        w={'65px'}
                        minH={'28px'}
                        border={'1px solid #ECECEC'}
                        borderRadius={'28px'}
                        justifyContent={'center'}
                        m={2}
                        p={'1px'}
                    >
                        <Flex 
                            p={1} 
                            cursor="pointer" 
                            onClick={() => goToCommentPage(navigate, post.id)}
                        >
                            <Image src={ballon} alt={"balão de mensagem"} />
                        </Flex>
                        <Flex p={1} cursor="pointer">
                            <Text 
                                fontSize={'9.5px'} 
                                fontFamily={'IBM Plex Sans'}
                                fontStyle='normal'
                                fontWeight='400'
                                color={'gray.500'}
                            >
                                {post?.replies}
                            </Text>
                        </Flex>

                    </HStack>
                </HStack>
            </Box>
        </Center>
    )
}

