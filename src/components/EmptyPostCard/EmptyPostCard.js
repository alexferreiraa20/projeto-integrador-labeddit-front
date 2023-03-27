import { useState } from 'react'
import {
    Box,
    Flex,
    useColorModeValue,
    Stack,
    FormControl,
    Input,
    Button,
    Spinner
} from '@chakra-ui/react'

export default function EmptyPostCard() {

      const [isLoading, setIsLoading] = useState(false)

        const onSubmit = (e) => {
        e.preventDefault()
        // console.log(form)
         }   


        return (
        <Flex
          minH={'10vh'}
          align={'start'}
          justify={'center'}
          // bg={useColorModeValue('gray.50', 'gray.800')}
        >
        <Stack spacing={4} mx={'auto'} maxW={'lg'} borderBottom={'1px'} borderBottomColor={'linear(90deg, #FF6489 0%, #F9B24E 100%)'}>          
          <Box
            rounded={'lg'}
            // size='363px'
          >
            <form onSubmit={onSubmit}>
              <Stack spacing={2} py={6} >
                <FormControl id="text" >
                  <Input
                    name='text'
                    type="text"
                    // value={form.email}
                    // onChange={onChangeInputs}
                    placeholder='Escreva seu post...'
                    autoComplete='off'
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    w= '364px'
                    /* It's a typo. It should be `width= '100%'` */
                    // w= '100%'
                    h= '131px'
                  />
                </FormControl>                
                <Stack spacing={2}>                  
                  <Button
                    // onClick={login}
                    type='submit'
                    bgGradient='linear(90deg, #FF6489 0%, #F9B24E 100%)'
                    boxShadow='2xl'
                    borderRadius='12px'
                    color={'white'}
                    _hover={{
                      bg: 'orange.500',
                    }}>
                      {isLoading ? <Spinner/> : 'Postar'}                    
                  </Button>               
                </Stack>
              </Stack>
            </form >
          </Box>
        </Stack>
      </Flex>
    )
}

