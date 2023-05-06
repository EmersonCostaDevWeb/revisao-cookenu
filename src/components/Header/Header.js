import React from "react"
import { Button } from "@chakra-ui/react";
import { HeaderContainer } from "./style";
import { gotoAddRecipePage, gotoFeedPage, gotoLoginPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
export const Header = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const LogoutSession = () => {
        localStorage.removeItem('token')
        gotoLoginPage(navigate)
    }
    return (
        <HeaderContainer>
            <Button colorScheme="orange" variant="outline" onClick={() => gotoFeedPage(navigate)}>Cookenu</Button>
            <Button colorScheme="orange" variant="outline" onClick={() => gotoAddRecipePage(navigate)}>Add Recipe</Button>
            {token ? <Button colorScheme="orange" variant="outline" onClick={()=>LogoutSession(navigate)}>Logout</Button>
                : <Button colorScheme="blue" variant="outline" onClick={() => gotoLoginPage(navigate)}>Login</Button>
            }

        </HeaderContainer>
    )
}