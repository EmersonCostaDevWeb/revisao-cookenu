import axios from "axios";
import {GlobalContext} from "./GlobalContext"
import {useState} from "react"
import { BASE_URL } from "../constants/url";
export const GlobalState = (props)=>{
    const [recipes, setRecipes] = useState([])
    const getRecipes=()=>{
        axios.get(`${BASE_URL}/recipe/all`,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        }).then((res)=>{
            console.log(res.data);
            setRecipes(res.data)
             
        }).catch((erro)=>{
            console.log(erro.response);
        })
    }
    const data  = {
        recipes,
        setRecipes,
        getRecipes
    }
    
    return (
        <GlobalContext.Provider value={data} >
            {props.children}
        </GlobalContext.Provider>
    )
}