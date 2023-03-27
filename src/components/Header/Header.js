import { HeaderContainer } from "./Header.Style"
import logo from "../../assets/mini-logo-labenu.svg"
import status from "../../assets/status-bar.svg"
import close from "../../assets/close-icon.svg"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useContext } from "react"
import { goToPostPage, goToLoginPage } from "../../routes/coordinator"
import { 
    Button, 
    Image
} from '@chakra-ui/react';


const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    // const context = useContext(GlobalContext)
    const params = useParams()

    const renderReader = () => {
        switch (location.pathname) {
            case "/signup":
                return (
                    <>
                        <Button>X</Button>
                        <img src={logo} alt="logo Labenu"/>
                        <Button
                            onclick={() => goToPostPage(navigate)}
                        >Entrar
                        </Button>
                    </>
                )
            case "/":
                return (
                    <>
                        <Button visibility={'hidden'} variant={'ghost'} fontSize={"2xl"} fontWeight={'bold'}  onClick={() => goToPostPage(navigate)}>
                            X
                        </Button>
                        <img src={logo} alt="logo Labenu"/>
                        <Button
                            onclick={() => goToLoginPage(navigate)}
                        >Logout
                        </Button>
                    </>
                )
            case `/comment`:
                return (
                    <>
                        <Button
                            onclick={() => goToPostPage(navigate)}
                        >
                            X
                        </Button>
                            <img src={logo} alt="logo Labenu"/>
                        <Button
                            onclick={() => goToLoginPage(navigate)}

                        >Logout
                        </Button>
                    </>
                )

            case `/*`:
                return (
                    <>
                    <Button>X</Button>
                        <img src={logo} alt="logo Labenu"/>
                        <Button
                            onclick={() => goToPostPage(navigate)}
                        >Entrar
                        </Button>
                    </>
                )
            default:
                return (
                    <>
                    <Button>X</Button>
                        <img src={logo} alt="logo Labenu"/>
                        <Button
                            onclick={() => goToPostPage(navigate)}
                        >Entrar
                        </Button>
                    
                    </>
                )
        }
    }    
        
    return(
    <>    
        <Image src={status} alt='Barra de status' align={'center'} justifyItems={'center'}/>
        <HeaderContainer>
            {renderReader}
        </HeaderContainer>
    </>
    )
}

export default Header