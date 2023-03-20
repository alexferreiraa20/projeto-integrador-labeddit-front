export const goToLoginPage = (navigator) => {
    navigator('/login')
}

export const goToSignupPage = (navigator) => {
    navigator('/signup')
}

export const goToPostPage = (navigator) => {
    navigator('/post')
}

export const goToCommentPage = (navigator, id) => {
    navigator(`/comment/${id}`)
}
