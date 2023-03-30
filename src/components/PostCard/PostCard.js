import { useState } from 'react'
import ballon from '../../assets/comment-button.svg'
import { ArrowUpIcon, ArrowUpFillIcon } from '../Icons/ArrowUpIcon'
import { ArrowDownFillIcon, ArrowDownIcon } from '../Icons/ArrowDownIcon'
import {
    Box,
    Heading,
    Text,
    Image,
    Flex,
    Center,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { goToCommentPage } from '../../routes/coordinator'

export default function PostCard({ post }) {
    const navigate = useNavigate()
    
    const [liked, setLiked] = useState(false)
    const [disliked, setDisLiked] = useState(false)
    

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
                        // bg="black"
                        display={'inline-block'}
                        // w={'132px'}
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
                            onClick={() => { setLiked(!liked) }}
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
                        </Box>
                        <Flex
                            p={1}
                            cursor="pointer"
                            onClick={() => setDisLiked(!disliked)}
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

