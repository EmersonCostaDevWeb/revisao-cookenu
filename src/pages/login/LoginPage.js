import { Button, Input } from "@chakra-ui/react"
import { useState } from "react"
import axios from "axios"
import { CenterPageContainer, FormContainer } from "../../components/styled-containers/styled"
import { useNavigate } from "react-router-dom"
import React from "react"
import { gotoFeedPage, gotoSignupPage } from "../../routes/coordinator"
import { BASE_URL } from "../../constants/url"
export const LoginPage = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const onChangeinputs = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
        console.log(form)
        axios.post(`${BASE_URL}/user/login`, form)
            .then((resp) => {
                console.log(resp.data.token);
                localStorage.setItem('token', resp.data.token)
               gotoFeedPage(navigate)
                
            })
            .catch((error) => {
                console.log(error.response.data.message);
            })
    }
    const onSubmitvalue = (event) => {
        event.preventDefault()
        console.log(form)
    }
    return (
        <CenterPageContainer>
            <FormContainer onSubmit={()=>onSubmitvalue}>

                <Input name="email"
                    value={form.email}
                    onChange={onChangeinputs}
                    placeholder="email"
                    type="email"
                    required />

                <Input name="password"
                    value={form.password}
                    onChange={onChangeinputs}
                    placeholder="password"
                    type="password"
                    minLength={7}
                    required />

                <Button type="submit"
                    colorScheme="orange" >
                    Login 
                </Button>
                <Button type="button"
                    colorScheme="orange"
                    variant="ghost"
                    size="5%"
                    onClick={()=>gotoSignupPage(navigate)}>
                    Não possui cadastro? Cadastre-se
                </Button>

            </FormContainer>
        </CenterPageContainer>
    )
}