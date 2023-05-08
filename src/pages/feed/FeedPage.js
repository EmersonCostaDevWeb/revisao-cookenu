import React from "react"
import { useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import { ProtectedPage } from "../../hooks/ProtectedPage"
import { Heading, Image, Button } from "@chakra-ui/react"
import { gotoAddRecipePage, gotoDetailsPage } from "../../routes/coordinator"
import { FeedContainer, RecipeCardStyle } from "./style"
export const FeedPage = () => {
    const navigate = useNavigate()
    ProtectedPage()
    const context = useContext(GlobalContext)
    const { recipes, getRecipes } = context

    useEffect(() => {
        getRecipes()
    })
    return (
        <FeedContainer>
            {recipes.map((recipe) => {
                return <div>
                    <RecipeCardStyle>
                        <Image src={recipe.imageUrl}
                            boxSize="xs"
                            objectFit="cover"
                            alt={recipe.title} width="158px" height="155px" />
                        <Heading size="md">{recipe.title}</Heading>
                        <Button colorScheme="orange" onClick={() => gotoDetailsPage(navigate, recipe.id)}>Ver Receitas</Button>
                    </RecipeCardStyle>
                </div>
            })}
            <Button colorScheme="orange"
            border-radius="60px" position="fixed" bottom="5px" right="5px" onClick={()=>gotoAddRecipePage(navigate)}>+</Button>
        </FeedContainer>
    )
}