import React from 'react'
import Header from '../../components/Header/Header'
// import LoginForm from '../../components/Login/LoginForm'
import logo from '../../assets/logo-labenu.svg'
import { useForm } from "../../hooks/useForm"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL, validateEmail, validatePassword } from '../../constants/constants'
import { goToPostPage, goToSignupPage } from '../../routes/coordinator'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Divider,
  Spinner,
  InputRightElement,
  InputGroup
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { LoginPageContainer } from './LoginPage.Style'


const LoginPage = () => {

  const navigate = useNavigate()

  const [form, onChangeInputs, clearInputs] = useForm({
    email: "",
    password: ""
  })
  const [ isEmailValid, setIsEmailValid ] = useState(true)
  const [ isPasswordValid, setIsPasswordValid ] = useState(true)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ showPassword, setShowPassword ] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    setIsEmailValid(validateEmail(form.email))
    setIsPasswordValid(validatePassword(form.password))
  }

  const login = async () => {
    try {
      setIsLoading(true)

      const body = {
        email: form.email,
        password: form.password
      }

      const response = isEmailValid && isPasswordValid && await axios.post(BASE_URL + "/users/login", body)
      window.localStorage.setItem('labeddit-token', response.data.token)
      setIsLoading(false)
      goToPostPage(navigate)
    } catch (error) {
      setIsLoading(false)
      console.error(error?.response?.data?.message)
      window.alert("Erro ao fazer o login!")
    }
  }

  return (
    <LoginPageContainer>
      <Header />
      <Flex
        minH={'100vh'}
        maxW={'428px'}

        align={'start'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={4} mx={'auto'} maxW={'lg'} py={12}>
          <Stack align={'center'} justify={'start'}>
            <Image boxSize='152px' src={logo} alt='Logo Labenu' />
            <Text fontSize={'16px'} color={'gray.600'}>
              O projeto de rede social da Labenu
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            size='363px'
          >
            <form onSubmit={onSubmit}>
              <Stack spacing={2} py={16} >
                <FormControl id="email" isInvalid={!isEmailValid}>
                  <Input
                    name='email'
                    type="email"
                    value={form.email}
                    onChange={onChangeInputs}
                    placeholder='E-mail'
                    autoComplete='off' 
                  />
                </FormControl>
                <FormControl id="password">
                  <InputGroup>
                  <Input
                    name='password'
                    type="password"
                    value={form.password}
                    onChange={onChangeInputs}
                    placeholder='Senha'
                    autoComplete='off'    
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                </InputRightElement> 
                </InputGroup>

                </FormControl>
                <Stack spacing={2} py={10}>
                  <Stack
                    // direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                  </Stack>
                  <Button
                    onClick={login}
                    type='submit'
                    bgGradient='linear(90deg, #FF6489 0%, #F9B24E 100%)'
                    boxShadow='2xl'
                    borderRadius='27px's
                    color={'white'}
                    _hover={{
                      bg: 'orange.500',
                    }}>
                      {isLoading ? <Spinner/> : 'Continuar'}                    
                  </Button>
                  <Stack divider={true}></Stack>
                  <Divider colorScheme={'orange'} size="ex" variant="solid" />
                  <Button
                    onClick={() => goToSignupPage(navigate)}
                    border='1px'
                    borderStyle='solid'
                    bordercolor='#FE7E02'
                    borderRadius='27px'
                    bgGradient={'white'}
                    color={'#FE7E02'}
                    _hover={{
                      bg: 'orange.500',
                    }}>
                    Criar uma conta!
                  </Button>
                </Stack>
              </Stack>
            </form >
          </Box>
        </Stack>
      </Flex>
    </LoginPageContainer>
  )
}

export default LoginPage