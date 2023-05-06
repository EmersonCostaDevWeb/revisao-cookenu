export const gotoLoginPage=(navigate)=>{
    navigate("/login")
}
export const gotoSignupPage=(navigate)=>{
    navigate("/signup")
}
export const gotoFeedPage=(navigate)=>{
    navigate("/")
}
export const gotoDetailsPage=(navigate, id)=>{
    navigate(`/recipe/${id}`)
}
export const gotoAddRecipePage=(navigate)=>{
    navigate("/addrecipe")
}