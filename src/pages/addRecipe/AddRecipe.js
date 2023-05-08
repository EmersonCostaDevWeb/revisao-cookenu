import axios from "axios"
import React, { useState } from "react"
import RecipeCard from "../../components/Card/Card"
import { BASE_URL } from "../../constants/url"
import {FormContainer, CenterPageContainer} from "../../components/styled-containers/styled" 
import { useNavigate } from "react-router-dom"
import { Button, Heading, Input } from "@chakra-ui/react"
import { ProtectedPage } from "../../hooks/ProtectedPage"
import {gotoFeedPage} from "../../routes/coordinator"
export const AddRecipe = () => {
    ProtectedPage()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
        description: "",
        imageUrl: ""
    })

    const onChangeinputs = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
        console.log(event.target.value);
    }
    const onSubmit = async (event) => {
        event.preventDefault()
        console.log(form);
        try {
        const resp =  await axios.post(`${BASE_URL}/recipe`,form,{
                headers:{
                    Authorization:localStorage.getItem('token')
                }
            })
            console.log(resp.json());
            setForm({
                name:"",
                description:"",
                imageUrl:""
            })
            alert("receita criada com sucesso!")
        }
        catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <div>
            <CenterPageContainer>
                <FormContainer onSubmit={onSubmit}>
                    <Heading size="md" textAlign="center">Adicionar Receita</Heading>
                    <Input name="name"
                        value={form.name}
                        onChange={onChangeinputs}
                        placeholder="name"
                        type="text"
                        minLength={3}
                        required />

                    <Input name="description"
                        value={form.description}
                        onChange={onChangeinputs}
                        placeholder="descrição"
                        type="email"
                        required />

                    <Input name="ImageUrl"
                        value={form.imageUrl}
                        onChange={onChangeinputs}
                        placeholder="image"
                        type="text"
                        minLength={6}
                        required />

                <Button type="submit" colorScheme="orange" onClick={()=>gotoFeedPage(navigate)}>Adicionar Receita</Button>
                </FormContainer>

            </CenterPageContainer>
        </div>
    )
}