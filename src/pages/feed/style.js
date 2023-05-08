import styled from "styled-components";
export const FeedContainer = styled.div`
   width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:13px;
    padding-top:20px ;
    background-color: #f4f4f4;
`
export const RecipeCardStyle = styled.div` 
    width:20vw;
    border:1px solid lightgray;
    margin:10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        margin-bottom: 10px;
        border-radius:10px;
    }
    button{
        margin-top:10px;
        width:90%;
    }
`