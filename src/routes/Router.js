import React from "react"
import { BrowserRouter,Routes, Route } from "react-router-dom"
import { DetailsPage } from "../pages/details/DetailsPage"
import { AddRecipe } from "../pages/addRecipe/AddRecipe"
import { LoginPage } from "../pages/login/LoginPage"
import { SignupPage } from "../pages/signup/SignupPage"
import {FeedPage} from "../pages/feed/FeedPage"
import {Header} from "../components/Header/Header"

export const Router = () => {

    return (
        <div>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<FeedPage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/signup" element={<SignupPage/>} />
                    <Route path="/details:id" element={<DetailsPage/>} />
                    <Route path="/addrecipe" element={<AddRecipe/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}