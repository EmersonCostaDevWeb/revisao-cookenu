import { Button, Input } from "@chakra-ui/react"
import { useState } from "react"
import axios from "axios";
import { CenterPageContainer, FormContainer } from "../../components/styled-containers/styled"
import { useNavigate } from "react-router-dom"
import React from "react"
import {gotoFeedPage, gotoLoginPage } from "../../routes/coordinator"
import { BASE_URL } from "../../constants/url"

export const SignupPage = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })
    const onChangeinputs = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })

    }

    const onSubmitvalue = async (event) => {
        event.preventDefault()
        console.log(form)
        try {
            const resp = await axios.post(`${BASE_URL}/user/signup`, form)
            console.log(resp.data);
            localStorage.setItem('token', resp.data.token)
            gotoFeedPage(navigate)
        }
        catch (error) {
            console.log(error.response.data.message)
        }

    }

    return (
        <CenterPageContainer>
            <FormContainer onSubmit={onSubmitvalue}>
                <Input name="name"
                    value={form.name}
                    onChange={onChangeinputs}
                    placeholder="Nome"
                    type="text"
                    required />

                <Input name="email"
                    value={form.email}
                    onChange={onChangeinputs}
                    placeholder="email"
                    type="email"
                    minLength={3}
                    required />

                <Input name="password"
                    value={form.password}
                    onChange={onChangeinputs}
                    placeholder="password"
                    type="password"
                    minLength={6}
                    required />

                <Button type="submit" colorScheme="orange">
                    Cadastrar usuario
                </Button>
                <Button type="button"
                    colorScheme="orange"
                    variant="ghost"
                    size="5%"
                    onClick={() => gotoLoginPage(navigate)}>
                    Já possui conta? Faça Login
                </Button>

            </FormContainer>
        </CenterPageContainer>
    )
}