import React, { useEffect, useState } from "react"
import { ProtectedPage } from "../../hooks/ProtectedPage"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import { useParams } from "react-router-dom"
import { Image, Text } from "@chakra-ui/react"
import { DetailContainerStyled } from "./styled"
export const DetailsPage = () => {
    ProtectedPage()
    const {id} = useParams()
    const [recipe, setRecipe] = useState()
    const getRecipe = (id) => {

        axios.get(`${BASE_URL}/recipe/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((res) => {
            setRecipe(res.data);
            console.log(res.data);
        }).catch((err) => {
            alert(err.response.data.message);
        })

    }
    
    useEffect(() => {
        getRecipe(id)
    },[id])
    return  recipe &&(
        <DetailContainerStyled>
            
            <Image src={recipe.imageUrl} />
            <Text  >{recipe.title}</Text>
        </DetailContainerStyled>
    )
}