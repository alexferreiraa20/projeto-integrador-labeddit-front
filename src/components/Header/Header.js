import { HeaderContainer } from "./Header.Style"
import logo from "../../assets/mini-logo-labenu.svg"
import status from "../../assets/status-bar.svg"
import close from "../../assets/close-icon.svg"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useContext } from "react"
import { goToPostPage, goToLoginPage } from "../../routes/coordinator"
import { 
    Button, 
    Image,
    Link
} from '@chakra-ui/react';
import { CloseButtonIcon } from "../Icons/CloseButtonIcon"


const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    // const context = useContext(GlobalContext)
    const params = useParams()

    const renderHeader = () => {
        switch (location.pathname) {
            case "/signup":
                return (
                    <>
                        <CloseButtonIcon visibility={'hidden'} onClick={() => goToPostPage(navigate)} />
                        <Image src={logo} alt="logo Labenu"/>
                        <Button
                            onclick={() => goToPostPage(navigate)}
                        >Entrar
                        </Button>
                    </>
                )
            case "/":
                return (
                    <>
                        <CloseButtonIcon visibility={'hidden'} onClick={() => goToPostPage(navigate)} />
                        <Image src={logo} alt="logo Labenu"/>
                        <Button
                            fontFamily={"Noto Sans"}
                            variant={'link'}
                            colorScheme={"blue"}
                            onclick={() => goToLoginPage(navigate)}
                            
                        >Logout
                        </Button>
                    </>
                )
            case `/comments/${params.postId}`:
                return (
                    <>
                        <CloseButtonIcon onClick={() => goToPostPage(navigate)} />

                        {/* <Button
                             variant={'ghost'} fontSize={"2xl"} fontWeight={'bold'}  onClick={() => goToPostPage(navigate)}
                        >
                            X
                        </Button> */}
                            <Image src={logo} alt="logo Labenu"/>
                        <Button
                            fontFamily={"Noto Sans"}
                            variant={'link'}
                            colorScheme={"blue"}
                            onclick={() => goToLoginPage(navigate)}
                            
                        >Logout
                        </Button>
                    </>
                )

            case `/*`:
                return (
                    <>
                        <CloseButtonIcon onClick={() => goToPostPage(navigate)} />
                        <Image src={logo} alt="logo Labenu"/>
                        <Button
                            fontFamily={"Noto Sans"}
                            variant={'link'}
                            colorScheme={"blue"}
                            onclick={() => goToLoginPage(navigate)}
                            
                        >Logout
                        </Button>
                    </>
                )
            default:
                return (
                    <>
                        <CloseButtonIcon visibility={'hidden'} onClick={() => goToPostPage(navigate)} />
                        <Image src={logo} alt="logo Labenu"/>
                        <Button
                            fontFamily={"Noto Sans"}
                            variant={'link'}
                            colorScheme={"blue"}
                            onclick={() => goToLoginPage(navigate)}
                            
                        >Logout
                        </Button>
                    </>
                )
        }
    }    
        
    return(
        <HeaderContainer>
            {renderHeader()}
        </HeaderContainer>
    )
}

export default Header